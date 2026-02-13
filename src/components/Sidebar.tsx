// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   User,
//   FileText,
//   Briefcase,
//   GraduationCap,
//   FolderKanban,
//   Wrench,
// } from "lucide-react";
// import { useResume } from "../context/ResumeContext";
// import { useAuth } from "../context/AuthContext";
// import html2pdf from "html2pdf.js";

// interface SidebarProps {
//   setActiveTab?: (tab: "form" | "preview") => void;
// }

// const items = [
//   { name: "Profile", path: "/dashboard/build", icon: User },
//   { name: "About", path: "/dashboard/aboutsection", icon: FileText },
//   { name: "Education", path: "/dashboard/education", icon: GraduationCap },
//   { name: "Skills", path: "/dashboard/skills", icon: Wrench },
//   { name: "Projects", path: "/dashboard/projects", icon: FolderKanban },
//   { name: "Experience", path: "/dashboard/experience", icon: Briefcase },
// ];

// export default function Sidebar({ setActiveTab }: SidebarProps) {
//   const navigate = useNavigate();
//   const { state } = useResume();
//   const { user } = useAuth();

//   const handleSaveResume = async () => {
//     if (!user) return alert("Please log in to save your resume!");
//     const element = document.getElementById("resume-preview");
//     if (!element) return alert("Preview not found!");

//     const opt = {
//       margin: 0,
//       filename: `${state.name || "resume"}.pdf`,
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "px", format: [element.offsetWidth, element.offsetHeight], orientation: "portrait" },
//     };
//     await html2pdf().set(opt).from(element).save();

//     const key = `savedResumes_${user}`;
//     const existing = JSON.parse(localStorage.getItem(key) || "[]");
//     const newResume = { id: crypto.randomUUID(), template: state.template, data: state, createdAt: Date.now() };
//     localStorage.setItem(key, JSON.stringify([newResume, ...existing]));
//     alert("Resume saved as PDF ✅");
//   };

//   return (
//     <aside className="flex-shrink-0 w-full sm:w-64 bg-white border-b sm:border-b-0 sm:border-r p-4 sm:p-6 flex flex-col overflow-y-auto">
//       <div className="mb-4">
//         <p className="text-sm text-gray-400 font-light text-center sm:text-left">
//           Start building your resume step-by-step from here...
//         </p>
//       </div>

//       <nav className="flex flex-col gap-2">
//         {items.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             onClick={() => {
//               // On small screens, switch to form tab
//               if (setActiveTab && window.innerWidth < 768) setActiveTab("form");
//             }}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
//                 isActive
//                   ? "bg-gradient-to-r from-purple-600 to-yellow-400 text-white"
//                   : "text-gray-700 hover:bg-black/5"
//               }`
//             }
//           >
//             <item.icon size={18} />
//             {item.name}
//           </NavLink>
//         ))}
//       </nav>

//       <div className="mt-6 flex flex-col gap-2">
//         <button
//           onClick={() => navigate("/dashboard/templates")}
//           className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-yellow-400 text-white text-sm"
//         >
//           Customize Template
//         </button>

//         <button
//           onClick={handleSaveResume}
//           disabled={!user}
//           className={`mt-2 px-4 py-2 rounded-lg text-white text-sm transition ${
//             user
//               ? "bg-gradient-to-r from-purple-600 to-yellow-400 hover:brightness-110"
//               : "bg-gray-300 cursor-not-allowed"
//           }`}
//         >
//           Save Resume (PDF)
//         </button>
//       </div>

//       <div className="mt-auto pt-6 text-xs text-gray-400 text-center sm:text-left">© Resumate</div>
//     </aside>
//   );
// }
import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Wrench,
} from "lucide-react";
import { useResume } from "../context/ResumeContext";
import { useAuth } from "../context/AuthContext";
import html2pdf from "html2pdf.js";

interface SidebarProps {
  setActiveTab?: (tab: "form" | "preview") => void;
}

const items = [
  { name: "Profile", path: "/dashboard/build", icon: User },
  { name: "About", path: "/dashboard/aboutsection", icon: FileText },
  { name: "Education", path: "/dashboard/education", icon: GraduationCap },
  { name: "Skills", path: "/dashboard/skills", icon: Wrench },
  { name: "Projects", path: "/dashboard/projects", icon: FolderKanban },
  { name: "Experience", path: "/dashboard/experience", icon: Briefcase },
];

export default function Sidebar({ setActiveTab }: SidebarProps) {
  const navigate = useNavigate();
  const { state } = useResume();
  const { user } = useAuth();

  const handleSaveResume = async () => {
    if (!user) return alert("Please log in to save your resume!");
    const element = document.getElementById("resume-preview");
    if (!element) return alert("Resume preview not found!");

    try {
      const opt = {
        margin: 0,
        filename: `${state.name || "resume"}.pdf`,
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { scale: 2, useCORS: true, allowTaint: true },
        jsPDF: { unit: "px", format: [element.offsetWidth, element.offsetHeight], orientation: "portrait" },
      };

      // Force activeTab to preview on small screens
      if (setActiveTab && window.innerWidth < 768) setActiveTab("preview");

      await html2pdf().set(opt).from(element).save();

      const key = `savedResumes_${user}`;
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const newResume = { id: crypto.randomUUID(), template: state.template, data: state, createdAt: Date.now() };
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

      <div className="mt-auto pt-6 text-xs text-gray-400 text-center sm:text-left">© Resumate</div>
    </aside>
  );
}
