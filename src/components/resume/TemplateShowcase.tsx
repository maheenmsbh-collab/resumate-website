// import { useRef, useState } from "react";
// import { Lock } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// type Template = {
//   id: string;
//   name: string;
//   image: string;
//   locked?: boolean;
// };

// const templates: Template[] = [
//   { id: "minimal", name: "Minimal Resume", image: "/pic44.svg" },
//   { id: "tech", name: "Tech Sidebar", image: "/pic3.svg" },
//   { id: "business", name: "Business Pro", image: "/picture2.svg" },
//   { id: "creative", name: "Creative Resume", image: "/pic22.svg" },

//   { id: "saas", name: "Premium SaaS", image: "/lock1.svg", locked: true },
//   { id: "course", name: "Online Course", image: "/lock2.svg", locked: true },
//   { id: "planner", name: "Event Planner", image: "/lock3.svg", locked: true },
// ];

// export default function TemplateShowcasePage() {
//   const [active, setActive] = useState<"available" | "locked">("available");
//   const availableRef = useRef<HTMLDivElement>(null);
//   const lockedRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();

//   const available = templates.filter((t) => !t.locked);
//   const locked = templates.filter((t) => t.locked);

//   const scrollTo = (section: "available" | "locked") => {
//     setActive(section);
//     const ref = section === "available" ? availableRef : lockedRef;
//     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 px-10 py-10">
//       {/* HEADER – keep website header separately */}
//       {/* TITLE */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Browse Templates</h1>
//         <p className="text-gray-600 mt-1">
//           Choose a resume template that fits your career
//         </p>
//       </div>

//       {/* TABS */}
//       <div className="flex gap-8 mb-12">
//         <button
//           onClick={() => scrollTo("available")}
//           className={`text-sm font-semibold transition ${
//             active === "available"
//               ? "text-purple-700 border-b-2 border-purple-700 pb-1"
//               : "text-gray-500 hover:text-gray-700"
//           }`}
//         >
//           Available
//         </button>

//         <button
//           onClick={() => scrollTo("locked")}
//           className={`text-sm font-semibold transition ${
//             active === "locked"
//               ? "text-purple-700 border-b-2 border-purple-700 pb-1"
//               : "text-gray-500 hover:text-gray-700"
//           }`}
//         >
//           Locked
//         </button>
//       </div>

//       {/* AVAILABLE */}
//       <section ref={availableRef} className="mb-20 scroll-mt-24">
//         <h2
//           className={`text-xl font-bold mb-6 ${
//             active === "available" ? "text-purple-700" : "text-gray-800"
//           }`}
//         >
//           Available Templates
//         </h2>

//         <TemplateGrid templates={available} onUse={() => navigate("/dashboard")} />
//       </section>

//       {/* LOCKED */}
//       <section ref={lockedRef} className="scroll-mt-24">
//         <h2
//           className={`text-xl font-bold mb-6 ${
//             active === "locked" ? "text-purple-700" : "text-gray-800"
//           }`}
//         >
//           Locked Templates
//         </h2>

//         <TemplateGrid templates={locked} locked />
//       </section>
//     </div>
//   );
// }

// /* -------------------------------- */

// function TemplateGrid({
//   templates,
//   locked = false,
//   onUse,
// }: {
//   templates: Template[];
//   locked?: boolean;
//   onUse?: () => void;
// }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {templates.map((t) => (
//         <div
//           key={t.id}
//           className="relative bg-white rounded-xl border-2 border-yellow-300 shadow-md overflow-hidden hover:shadow-lg transition"
//         >
//           {/* IMAGE WRAPPER */}
//           <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
//             <img
//               src={t.image}
//               alt={t.name}
//               className={`max-w-full max-h-full object-contain ${
//                 locked ? "opacity-40" : ""
//               }`}
//             />
//           </div>

//           {/* LOCK */}
//           {locked && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white p-4 rounded-full shadow">
//                 <Lock className="text-purple-700" />
//               </div>
//             </div>
//           )}

//           {/* FOOTER */}
//           <div className="p-5 text-center">
//             <h3 className="font-semibold text-gray-900">{t.name}</h3>

//             {!locked ? (
//               <button
//                 onClick={onUse}
//                 className="mt-4 w-full bg-purple-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-purple-700 transition"
//               >
//                 Use Template
//               </button>
//             ) : (
//               <button
//                 className="mt-4 w-full bg-yellow-400 text-black rounded-lg py-2 text-sm font-semibold hover:bg-yellow-500 transition"
//               >
//                 Unlock with Pro
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/ResumeContext";

import { useRef, useState } from "react";

import { resumeTemplates } from "../../components/resume/templates"; // for type safety

type Template = {
  id: keyof typeof resumeTemplates; // ✅ template ID must match context keys
  name: string;
  image: string;
  locked?: boolean;
};

const templates: Template[] = [
  { id: "minimal", name: "Minimal Resume", image: "/pic44.svg" },
  { id: "techSidebar", name: "Tech Sidebar", image: "/pic3.svg" },
  { id: "business", name: "Business Pro", image: "/picture2.svg" },
  { id: "creative", name: "Creative Resume", image: "/pic22.svg" },
    { id: "elegantTimeline", name: "Elegant Timeline", image: "/picture5.svg" },
      { id: "bjet", name: "BJet", image: "/picture4.svg" },
  { id: "ultimate", name: "Ultimate SAAS", image: "/lock1.svg", locked: true },
  { id: "pro", name: "Executive", image: "/lock2.svg", locked: true },
   { id: "atlas", name: "Atlas", image: "/lock3.svg", locked: true },

];

export default function TemplateShowcasePage() {
  const [active, setActive] = useState<"available" | "locked">("available");
  const availableRef = useRef<HTMLDivElement>(null);
  const lockedRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { dispatch } = useResume(); // get dispatch to update template

  const available = templates.filter((t) => !t.locked);
  const locked = templates.filter((t) => t.locked);

  const scrollTo = (section: "available" | "locked") => {
    setActive(section);
    const ref = section === "available" ? availableRef : lockedRef;
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleUseTemplate = (id: keyof typeof resumeTemplates) => {
    // ✅ Set template safely
    dispatch({ type: "SET_TEMPLATE", payload: id });

    // Navigate to dashboard and open form panel
    navigate("/dashboard/build", { state: { openForm: true } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 px-10 py-10">
      {/* TITLE */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Templates</h1>
        <p className="text-gray-600 mt-1">
          Choose a resume template that fits your career
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-8 mb-12">
        <button
          onClick={() => scrollTo("available")}
          className={`text-sm font-semibold transition ${
            active === "available"
              ? "text-purple-700 border-b-2 border-purple-700 pb-1"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Available
        </button>

        <button
          onClick={() => scrollTo("locked")}
          className={`text-sm font-semibold transition ${
            active === "locked"
              ? "text-purple-700 border-b-2 border-purple-700 pb-1"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Locked
        </button>
      </div>

      {/* AVAILABLE */}
      <section ref={availableRef} className="mb-20 scroll-mt-24">
        <h2
          className={`text-xl font-bold mb-6 ${
            active === "available" ? "text-purple-700" : "text-gray-800"
          }`}
        >
          Available Templates
        </h2>

        <TemplateGrid
          templates={available}
          onUse={handleUseTemplate}
        />
      </section>

      {/* LOCKED */}
      <section ref={lockedRef} className="scroll-mt-24">
        <h2
          className={`text-xl font-bold mb-6 ${
            active === "locked" ? "text-purple-700" : "text-gray-800"
          }`}
        >
          Locked Templates
        </h2>

        <TemplateGrid templates={locked} locked />
      </section>
    </div>
  );
}

/* -------------------------------- */

function TemplateGrid({
  templates,
  locked = false,
  onUse,
}: {
  templates: Template[];
  locked?: boolean;
  onUse?: (id: keyof typeof resumeTemplates) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {templates.map((t) => (
        <div
          key={t.id}
          className="relative bg-white rounded-xl border-2 border-yellow-300 shadow-md overflow-hidden hover:shadow-lg transition"
        >
          {/* IMAGE */}
          <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={t.image}
              alt={t.name}
              className={`max-w-full max-h-full object-contain ${
                locked ? "opacity-40" : ""
              }`}
            />
          </div>

          {/* LOCK */}
          {locked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-full shadow">
                <Lock className="text-purple-700" />
              </div>
            </div>
          )}

          {/* FOOTER */}
          <div className="p-5 text-center">
            <h3 className="font-semibold text-gray-900">{t.name}</h3>

            {!locked ? (
              <button
                onClick={() => onUse?.(t.id)}
                className="mt-4 w-full bg-purple-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-purple-700 transition"
              >
                Use Template
              </button>
            ) : (
              <button
                className="mt-4 w-full bg-yellow-400 text-black rounded-lg py-2 text-sm font-semibold hover:bg-yellow-500 transition"
              >
                Unlock with Pro
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
