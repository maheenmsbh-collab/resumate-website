import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Wrench,
  Lock,
} from "lucide-react";
import { useResume } from "../context/ResumeContext";
import { useAuth } from "../context/AuthContext";
import html2pdf from "html2pdf.js";

interface SidebarProps {
  setActiveTab?: (tab: "form" | "preview") => void;
}
console.log(Lock)

interface Html2PdfOptions {
  margin?: number;
  filename?: string;
  image?: {
    type?: "jpeg" | "png" | "webp";
    quality?: number;
  };
  html2canvas?: {
    scale?: number;
    useCORS?: boolean;
    allowTaint?: boolean;
  };
  jsPDF?: {
    unit?: string;
    format?: [number, number];
    orientation?: "portrait" | "landscape";
  };
}

const items = [
  { name: "Profile", path: "/dashboard/build", icon: User },
  { name: "About", path: "/dashboard/aboutsection", icon: FileText },
  { name: "Education", path: "/dashboard/education", icon: GraduationCap },
  { name: "Skills", path: "/dashboard/skills", icon: Wrench },
  { name: "Projects", path: "/dashboard/projects", icon: FolderKanban },
  { name: "Experience", path: "/dashboard/experience", icon: Briefcase },
];

// ✅ Proper type guard to fix TypeScript errors
const fixColors = (root: HTMLElement) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);
  let node: Node | null = walker.nextNode();

  while (node) {
    if (node && node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      const styles = window.getComputedStyle(el);

      (["color", "backgroundColor", "borderColor"] as const).forEach((prop) => {
        const val = styles[prop];
        if (val && val.includes("oklch")) {
          try {
            const temp = document.createElement("div");
            temp.style.color = val;
            document.body.appendChild(temp);
            const rgb = getComputedStyle(temp).color;
            el.style.setProperty(prop, rgb);
            temp.remove();
          } catch {
            el.style.setProperty(prop, "#111827"); // fallback
          }
        }
      });
    }
    node = walker.nextNode();
  }
};

export default function Sidebar({ setActiveTab }: SidebarProps) {
  const navigate = useNavigate();
  const { state } = useResume();
  const { user } = useAuth();

  const handleSaveResume = async () => {
    if (!user) return alert("Please log in to save your resume!");
    const element = document.getElementById("resume-preview");
    if (!element) return alert("Resume preview not found!");

    fixColors(element);

    try {
      const opt: Html2PdfOptions = {
        margin: 0,
        filename: `${state.name || "resume"}.pdf`,
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { scale: 2, useCORS: true, allowTaint: true },
        jsPDF: {
          unit: "px",
          format: [element.offsetWidth, element.offsetHeight],
          orientation: "portrait",
        },
      };

      if (setActiveTab && window.innerWidth < 768) setActiveTab("preview");

      await html2pdf().set(opt).from(element).save();

      const key = `savedResumes_${user}`;
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const newResume = {
        id: crypto.randomUUID(),
        template: state.template,
        data: state,
        createdAt: Date.now(),
      };
      localStorage.setItem(key, JSON.stringify([newResume, ...existing]));

      alert("Resume saved as PDF ✅");
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF. Try again!");
    }
  };

  return (
    <aside className="flex-shrink-0 w-full sm:w-64 bg-white border-b sm:border-b-0 sm:border-r p-4 sm:p-6 flex flex-col overflow-y-auto">
      <div className="mb-4">
        <p className="text-sm text-gray-400 font-light text-center sm:text-left">
          Start building your resume step-by-step from here...
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => {
              if (setActiveTab && window.innerWidth < 768) setActiveTab("form");
            }}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-yellow-400 text-white"
                  : "text-gray-700 hover:bg-black/5"
              }`
            }
          >
            <item.icon size={18} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 flex flex-col gap-2">
        <button
          onClick={() => navigate("/dashboard/templates")}
          className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-yellow-400 text-white text-sm"
        >
          Customize Template
        </button>

        <button
          onClick={handleSaveResume}
          disabled={!user}
          className={`mt-2 px-4 py-2 rounded-lg text-white text-sm transition ${
            user
              ? "bg-gradient-to-r from-purple-600 to-yellow-400 hover:brightness-110"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Save Resume (PDF)
        </button>
      </div>

      <div className="mt-auto pt-6 text-xs text-gray-400 text-center sm:text-left">
        © Resumate
      </div>
    </aside>
  );
}
