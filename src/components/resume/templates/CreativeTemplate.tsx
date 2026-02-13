import type { ResumeState } from "../../../context/ResumeContext";

export default function CreativeTemplate({ data }: { data: ResumeState }) {
  return (
    <div
      id="resume-preview"
      className="max-w-5xl mx-auto min-h-[1122px] relative font-sans shadow-2xl border border-gray-200 overflow-hidden bg-[#fefcf9]"
    >
      {/* TOP ANGLED SHAPE */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#d4a758] to-[#f43f5e] clip-top-shape z-0"></div>

      {/* BOTTOM ANGLED SHAPE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-[#359e7b] to-[#3b82f6] clip-bottom-shape z-0"></div>

      {/* CONTENT */}
      <div className="flex flex-col md:grid md:grid-cols-3 relative z-10 min-h-[1122px]">

        {/* LEFT SIDEBAR */}
        <aside className="bg-gradient-to-b from-[#bfa5e5] to-[#6d28d9] text-white p-6 sm:p-12 md:col-span-1 flex flex-col gap-6 sm:gap-12 min-h-[1122px] rounded-r-3xl shadow-lg">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold break-words">{data.name || "Your Name"}</h1>
            <p className="text-xs sm:text-sm tracking-wide break-words">{data.title || "Your Title"}</p>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="bg-white bg-opacity-10 p-3 sm:p-5 rounded-xl shadow-inner">
              <h2 className="text-xs sm:text-sm font-semibold uppercase mb-1 sm:mb-2 border-b border-white pb-1">Skills</h2>
              <ul className="space-y-1 text-xs sm:text-sm break-words">
                {data.skills.map((s) => (
                  <li key={s.id}>{s.name} — {s.level}%</li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section className="bg-white bg-opacity-10 p-3 sm:p-5 rounded-xl shadow-inner">
              <h2 className="text-xs sm:text-sm font-semibold uppercase mb-1 sm:mb-2 border-b border-white pb-1">Education</h2>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm break-words">
                {data.education.map((e) => (
                  <p key={e.id}>
                    <span className="font-medium">{e.degree}</span><br />
                    {e.institution}<br />
                    <span className="text-xs text-gray-200">{e.duration}</span>
                  </p>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* RIGHT CONTENT */}
        <main className="p-6 sm:p-12 md:col-span-2 flex flex-col gap-6 sm:gap-10 mt-4 md:mt-0">

          {/* About Section */}
          {data.about && (
            <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 border-b border-gray-300 pb-1">About Me</h2>
              <p className="text-gray-800 leading-relaxed break-words text-sm sm:text-base">{data.about}</p>
            </section>
          )}

          {/* Experience */}
          {data.experiences.length > 0 && (
            <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 border-b border-gray-300 pb-1">Professional Experience</h2>
              <div className="space-y-3 sm:space-y-4">
                {data.experiences.map((exp) => (
                  <div key={exp.id}>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{exp.role} — {exp.company}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{exp.duration}</p>
                    <p className="text-gray-800 leading-relaxed break-words text-sm sm:text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 border-b border-gray-300 pb-1">Projects</h2>
              <div className="space-y-3 sm:space-y-4">
                {data.projects.map((p) => (
                  <div key={p.id} className="break-words text-sm sm:text-base">
                    <p className="font-semibold text-gray-900">{p.title}</p>
                    <p className="text-gray-800 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>
      </div>

      {/* Clip-path CSS */}
      <style>
        {`
          .clip-top-shape {
            clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
          }
          .clip-bottom-shape {
            clip-path: polygon(0 35%, 100% 0, 100% 100%, 0 100%);
          }
        `}
      </style>
    </div>
  );
}
