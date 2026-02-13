// // import { useResume } from "../context/ResumeContext";
// // import { resumeTemplates } from "./resume/templates";

// // export default function ResumePreview() {
// //   const { state } = useResume();
// //   const Template = resumeTemplates[state.template] || resumeTemplates.minimal;

// //   return (
// //     <div className="flex justify-center mt-6 w-full">
// //       <div
// //         id="resume-preview"
// //         className="bg-white shadow-2xl rounded-xl overflow-hidden print:shadow-none"
// //         style={{
// //           width: "100%",
// //           maxWidth: "794px", // max width = A4
// //           aspectRatio: "210 / 297", // maintain A4 aspect ratio
// //           padding: "20px",
// //           boxSizing: "border-box",
// //           border: `1px solid ${state.accentColor || "#ddd"}`,
// //         }}
// //       >
// //         <Template data={state} />
// //       </div>
// //     </div>
// //   );
// // }
// import { useResume } from "../context/ResumeContext";
// import { resumeTemplates } from "./resume/templates";

// export default function ResumePreview() {
//   const { state } = useResume();
//   const Template =
//     resumeTemplates[state.template] || resumeTemplates.minimal;

//   return (
//     <div className="flex justify-center mt-6 w-full px-2 sm:px-4">
//       <div
//         id="resume-preview"
//         className="bg-white shadow-2xl rounded-xl print:shadow-none"
//         style={{
//           width: "100%",
//           maxWidth: "794px", // A4 width in px
//           minHeight: "1123px", // A4 height in px (important)
//           padding: "40px",
//           boxSizing: "border-box",
//           border: `1px solid ${state.accentColor || "#ddd"}`,
//         }}
//       >
//         <Template data={state} />
//       </div>
//     </div>
//   );
// }
import { useResume } from "../context/ResumeContext";
import { resumeTemplates } from "./resume/templates";

export default function ResumePreview() {
  const { state } = useResume();
  const Template = resumeTemplates[state.template] || resumeTemplates.minimal;

  return (
    <div className="flex justify-center mt-6 w-full px-2 sm:px-4 print:p-0">
      <div
        id="resume-preview"
        className="bg-white shadow-2xl print:shadow-none rounded-xl"
        style={{
          width: "794px", // A4 width
          minHeight: "1123px", // A4 height
          padding: "40px",
          boxSizing: "border-box",
          border: `1px solid ${state.accentColor || "#ddd"}`,
          fontFamily: `"Inter", system-ui, sans-serif`,
          color: state.textColor || "#111827",
          backgroundColor: state.backgroundColor || "#fff",
          overflow: "hidden",
        }}
      >
        <Template data={state} />
      </div>
    </div>
  );
}
