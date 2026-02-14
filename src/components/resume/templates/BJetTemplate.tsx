import type { ResumeState } from "../../../context/ResumeContext";

export default function BJetTemplateDark({ data }: { data: ResumeState }) {
  return (
    <div
      className="mx-auto shadow-2xl rounded-3xl overflow-hidden font-sans text-gray-900"
      style={{
        backgroundColor: "#F9FAFB",
        maxWidth: "850px", // fixed PDF-friendly width
        padding: "0",
      }}
    >
      <header
        className="relative text-center p-6 sm:p-12 rounded-t-3xl overflow-hidden"
        style={{ backgroundColor: "#FBBF24", color: "#FFFFFF" }}
      >
        <div
          className="absolute -top-8 -left-8 rounded-full opacity-50"
          style={{ width: "80px", height: "80px", backgroundColor: "#FEF3C7" }}
        />
        <div
          className="absolute -bottom-10 -right-10 rounded-full opacity-30"
          style={{ width: "120px", height: "120px", backgroundColor: "#1E3A8A" }}
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold break-words relative z-10">
          {data.name || "Your Name"}
        </h1>
        <p className="text-lg sm:text-xl mt-2 relative z-10">{data.title || "Professional Title"}</p>
      </header>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 p-6 sm:p-10">
        <aside
          className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-10 rounded-bl-3xl rounded-tl-3xl shadow-inner md:col-span-1"
          style={{ backgroundColor: "#FEF3C7" }}
        >
          {(data.email || data.phone || data.github || data.linkedin || data.website) && (
            <section>
              <h2
                className="text-xs font-semibold tracking-widest mb-2 sm:mb-3"
                style={{ color: "#6B7280" }}
              >
                CONTACT
              </h2>
              <div className="space-y-1 sm:space-y-2 text-sm break-words" style={{ color: "#374151" }}>
                {data.phone && <p>Phone: {data.phone}</p>}
                {data.email && <p>Email: {data.email}</p>}
                {data.github && <p>GitHub: {data.github}</p>}
                {data.linkedin && <p>LinkedIn: {data.linkedin}</p>}
                {data.website && <p>Website: {data.website}</p>}
              </div>
            </section>
          )}

          {data.skills.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest mb-2 sm:mb-3" style={{ color: "#6B7280" }}>
                SKILLS
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {data.skills.map(s => (
                  <div key={s.id}>
                    <div className="flex justify-between text-sm break-words">
                      <span>{s.name}</span>
                      <span style={{ color: "#6B7280" }}>{s.level ?? 0}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full mt-1 overflow-hidden" style={{ backgroundColor: "#D1D5DB" }}>
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${s.level ?? 50}%`, backgroundColor: "#FBBF24" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest mb-2 sm:mb-3" style={{ color: "#6B7280" }}>
                EDUCATION
              </h2>
              <div className="space-y-2 sm:space-y-3 text-sm break-words" style={{ color: "#374151" }}>
                {data.education.map(e => (
                  <div key={e.id}>
                    <p className="font-medium" style={{ color: "#111827" }}>{e.degree}</p>
                    <p>{e.institution}</p>
                    {e.duration && <p style={{ color: "#6B7280" }}>{e.duration}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        <main className="md:col-span-2 flex flex-col gap-6 sm:gap-12 mt-6 md:mt-0">
          {data.about && (
            <section className="relative p-4 sm:p-6 rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: "#FFFFFF", color: "#374151" }}>
              <h2 className="text-md sm:text-lg font-semibold border-b pb-1 mb-2 sm:mb-4" style={{ borderColor: "#D1D5DB" }}>About Me</h2>
              <p className="leading-relaxed break-words text-sm sm:text-base">{data.about}</p>
            </section>
          )}

          {data.experiences.length > 0 && (
            <section className="relative p-4 sm:p-6 rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: "#FFFFFF", color: "#374151" }}>
              <h2 className="text-md sm:text-lg font-semibold border-b pb-1 mb-2 sm:mb-4" style={{ borderColor: "#D1D5DB" }}>Experience</h2>
              <div className="space-y-4 sm:space-y-6">
                {data.experiences.map(exp => (
                  <div key={exp.id} className="relative pl-4 sm:pl-5">
                    <span className="absolute -left-2 top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: "#FBBF24" }}></span>
                    <div className="flex justify-between flex-wrap gap-2 break-words text-sm sm:text-base">
                      <p className="font-semibold" style={{ color: "#111827" }}>{exp.role} — {exp.company}</p>
                      <p className="text-xs sm:text-sm" style={{ color: "#6B7280" }}>{exp.duration}</p>
                    </div>
                    <p className="mt-1 sm:mt-2 leading-relaxed break-words text-sm sm:text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.projects.length > 0 && (
            <section className="relative p-4 sm:p-6 rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: "#FFFFFF", color: "#374151" }}>
              <h2 className="text-md sm:text-lg font-semibold border-b pb-1 mb-2 sm:mb-4" style={{ borderColor: "#D1D5DB" }}>Projects</h2>
              <div className="space-y-4 sm:space-y-5">
                {data.projects.map(p => (
                  <div key={p.id} className="break-words text-sm sm:text-base">
                    <p className="font-semibold" style={{ color: "#111827" }}>{p.title}</p>
                    <p className="mt-1 leading-relaxed">{p.description}</p>
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
