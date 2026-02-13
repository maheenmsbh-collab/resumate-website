import type { ResumeState } from "../../../context/ResumeContext";

export default function BusinessTemplate({ data }: { data: ResumeState }) {
  const headerColor = "#1e3a8a"; // Dark blue

  return (
    <div
      id="resume-preview"
      className="max-w-5xl mx-auto shadow-xl rounded-lg font-sans overflow-hidden"
      style={{ minHeight: "1122px" }} // approximate A4 height
    >
      {/* HEADER */}
      <header
        className="w-full p-6 sm:p-8 text-center"
        style={{ backgroundColor: headerColor }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white break-words">
          {data.name || "Your Name"}
        </h1>
        <p className="text-lg sm:text-xl text-white mt-1">{data.title || "Your Title"}</p>
      </header>

      {/* MAIN GRID */}
      <div className="flex flex-col md:grid md:grid-cols-3 min-h-[calc(1122px-128px)]">

        {/* LEFT SIDEBAR */}
        <aside className="bg-[#8299d7] text-white p-4 sm:p-8 flex flex-col gap-6 sm:gap-10 md:col-span-1 min-h-full">
          {/* About */}
          {data.about && (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-1 sm:mb-2">
                About
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">{data.about}</p>
            </section>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-1 sm:mb-2">
                Skills
              </h2>
              <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-sm sm:text-base">
                {data.skills.map((s) => (
                  <li key={s.id}>{s.name}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-1 sm:mb-2">
                Education
              </h2>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                {data.education.map((e) => (
                  <p key={e.id}>
                    <span className="font-medium">{e.degree}</span>, {e.institution} · {e.duration}
                  </p>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="p-4 sm:p-8 md:col-span-2 flex flex-col gap-6 sm:gap-12 bg-white mt-4 md:mt-0">
          {/* Experience */}
          {data.experiences.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl font-semibold border-b pb-1 mb-2 sm:mb-4 text-gray-900">
                Experience
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {data.experiences.map((exp) => (
                  <div key={exp.id}>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                      {exp.role} — {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">{exp.duration}</p>
                    <p className="text-sm sm:text-base text-gray-700 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl font-semibold border-b pb-1 mb-2 sm:mb-4 text-gray-900">
                Projects
              </h2>
              <div className="space-y-4 sm:space-y-5">
                {data.projects.map((p) => (
                  <div key={p.id} className="break-words text-sm sm:text-base">
                    <p className="font-medium text-gray-900">{p.title}</p>
                    <p className="text-gray-700 mt-1 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
