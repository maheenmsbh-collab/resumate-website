// // src/components/TemplateSelector.tsx
// import { useResume } from "../context/ResumeContext";
// import { resumeTemplates } from "./resume/templates";

// export default function TemplateSelector() {
//   const { state, dispatch } = useResume();
//   const templateKeys = Object.keys(resumeTemplates) as (keyof typeof resumeTemplates)[];

//   return (
//     <div className="flex flex-wrap gap-4 justify-center mb-6">
//       {templateKeys.map((key) => (
//         <button
//           key={key}
//           onClick={() => dispatch({ type: "SET_TEMPLATE", payload: key })}
//           className={`p-3 border rounded-lg w-32 h-40 flex flex-col items-center justify-center hover:shadow-lg transition ${
//             state.template === key ? "border-blue-500 bg-blue-50" : "border-gray-300"
//           }`}
//         >
//           {/* Thumbnail placeholder */}
//           <div className="w-full h-20 bg-gray-200 rounded mb-2 flex items-center justify-center text-xs text-gray-600">
//             {key}
//           </div>
//           <span className="text-sm font-medium">{key}</span>
//         </button>
//       ))}
//     </div>
//   );
// }
