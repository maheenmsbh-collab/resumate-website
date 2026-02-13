// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// // export default function HomePage() {
// //   const navigate = useNavigate();
// //   const { user } = useAuth();

// //   const handleStartBuilding = () => {
// //     if (user) navigate("/dashboard");
// //     else navigate("/login");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center px-6">
// //       <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        
// //         {/* LEFT – Illustration */}
// //         <div className="flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 p-10">
// //           <img
// //             src="/hero-resume.svg"
// //             alt="Resume illustration"
// //             className="max-w-sm w-full"
// //           />
// //         </div>

// //         {/* RIGHT – Content */}
// //         <div className="p-10 flex flex-col justify-center">
// //           <h1 className="text-4xl font-bold text-gray-900 leading-tight">
// //             Craft Your Future With <br />
// //             <span className="text-purple-600">Resumate</span>
// //           </h1>

// //           <p className="mt-4 text-gray-600 text-lg">
// //             Your professional resume mate who helps you build resumes in minutes using 
// //             smart layouts and live preview.
// //           </p>

// //           <button
// //             onClick={handleStartBuilding}
// //             className="mt-8 w-fit bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition"
// //           >
// //             Start Building Resume
// //           </button>

// //           {/* Features */}
// //           <div className="mt-10 grid grid-cols-3 gap-6 text-center">
// //             <Feature title="Pre-designed Templates" />
// //             <Feature title="Easy Customization" />
// //             <Feature title="PDF Export Ready" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function Feature({ title }: { title: string }) {
// //   return (
// //     <div className="text-sm text-gray-700">
// //       <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
// //         📄
// //       </div>
// //       {title}
// //     </div>
// //   );
// // }
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function HomePage() {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const handleStartBuilding = () => {
//     if (user) navigate("/dashboard");
//     else navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center px-6">
//       <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 overflow-hidden">
//         {/* LEFT – Illustration */}
//         <div className="flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 p-10">
//           <img
//             src="/hero-resume.svg"
//             alt="Resume illustration"
//             className="max-w-sm w-full"
//           />
//         </div>

//         {/* RIGHT – Content */}
//         <div className="p-10 flex flex-col justify-center">
//           <h1 className="text-4xl font-bold text-gray-900 leading-tight">
//             Craft Your Future With <br />
//             <span className="text-purple-600">Resumate</span>
//           </h1>

//           <p className="mt-4 text-gray-600 text-lg">
//             Your professional resume mate who helps you build resumes in minutes using 
//             smart layouts and live preview.
//           </p>

//           <button
//             onClick={handleStartBuilding}
//             className="mt-8 w-fit bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition"
//           >
//             Start Building Resume
//           </button>

//           {/* Features */}
//           <div className="mt-10 grid grid-cols-3 gap-6 text-center">
//             <Feature title="Pre-designed Templates" />
//             <Feature title="Easy Customization" />
//             <Feature title="PDF Export Ready" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Feature({ title }: { title: string }) {
//   return (
//     <div className="text-sm text-gray-700">
//       <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
//         📄
//       </div>
//       {title}
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartBuilding = () => {
    if (user) navigate("/dashboard");
    else navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        {/* LEFT – Illustration */}
        <div className="flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 p-10">
          <img
            src="/hero-resume.svg"
            alt="Resume illustration"
            className="max-w-sm w-full"
          />
        </div>

        {/* RIGHT – Content */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Craft Your Future With <br />
            <span className="text-purple-600">Resumate</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Your professional resume mate who helps you build resumes in minutes using 
            smart layouts and live preview.
          </p>

          <button
            onClick={handleStartBuilding}
            className="mt-8 w-fit bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition"
          >
            Start Building Resume
          </button>

          {/* Features */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <Feature title="Pre-designed Templates" />
            <Feature title="Easy Customization" />
            <Feature title="PDF Export Ready" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <div className="text-sm text-gray-700">
      <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
        📄
      </div>
      {title}
    </div>
  );
}
