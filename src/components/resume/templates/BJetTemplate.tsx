import type { ResumeState } from "../../../context/ResumeContext";

export default function BJetTemplateDark({ data }: { data: ResumeState }) {
  return (
    <div className="max-w-5xl mx-auto shadow-2xl rounded-3xl overflow-hidden font-sans text-gray-900 bg-gray-50">

      
      <header className="relative bg-yellow-200 text-white text-center p-8 sm:p-12 rounded-t-3xl overflow-hidden">
        <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-900 rounded-full opacity-30"></div>

        <h1 className="text-3xl sm:text-4xl font-extrabold break-words z-10 relative">{data.name || "Your Name"}</h1>
        <p className="text-lg sm:text-xl mt-2 z-10 relative">{data.title || "Professional Title"}</p>
      </header>

      
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 p-6 sm:p-10">

        
        <aside className="bg-yellow-50 p-6 sm:p-8 flex flex-col gap-6 sm:gap-10 rounded-bl-3xl rounded-tl-3xl shadow-inner md:col-span-1">

          
          {(data.email || data.phone || data.github || data.linkedin || data.website || data.location) && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-2 sm:mb-3">CONTACT</h2>
              <div className="space-y-1 sm:space-y-2 text-sm text-gray-700 break-words">
                {data.phone && <p>Phone: {data.phone}</p>}
                {data.email && <p>Email: {data.email}</p>}
                {data.location && <p>Location: {data.location}</p>}
                {data.github && <p>GitHub: {data.github}</p>}
                {data.linkedin && <p>LinkedIn: {data.linkedin}</p>}
                {data.website && <p>Website: {data.website}</p>}
              </div>
            </section>
          )}

          
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-2 sm:mb-3">SKILLS</h2>
              <div className="space-y-2 sm:space-y-3">
                {data.skills.map(s => (
                  <div key={s.id}>
                    <div className="flex justify-between text-sm break-words">
                      <span>{s.name}</span>
                      <span className="text-gray-500">{s.level ?? 0}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-300 rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-1.5 bg-yellow-500 rounded-full"
                        style={{ width: `${s.level ?? 50}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-widest text-gray-500 mb-2 sm:mb-3">EDUCATION</h2>
              <div className="space-y-2 sm:space-y-3 text-sm break-words">
                {data.education.map(e => (
                  <div key={e.id}>
                    <p className="font-medium text-gray-800">{e.degree}</p>
                    <p className="text-gray-700">{e.institution}</p>
                    {e.duration && <p className="text-gray-500">{e.duration}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        
        <main className="md:col-span-2 flex flex-col gap-6 sm:gap-12 mt-6 md:mt-0">

          {/* ABOUT */}
          {data.about && (
            <section className="relative p-4 sm:p-6 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full opacity-40"></div>

              <h2 className="text-md sm:text-lg font-semibold border-b border-gray-300 pb-1 mb-2 sm:mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed break-words text-sm sm:text-base">{data.about}</p>
            </section>
          )}

          {/* EXPERIENCE */}
          {data.experiences.length > 0 && (
            <section className="relative p-4 sm:p-6 bg-white rounded-xl shadow-md overflow-hidden">
              <h2 className="text-md sm:text-lg font-semibold border-b border-gray-300 pb-1 mb-2 sm:mb-4">Experience</h2>
              <div className="space-y-4 sm:space-y-6">
                {data.experiences.map(exp => (
                  <div key={exp.id} className="relative pl-4 sm:pl-5">
                    <span className="absolute -left-2 top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></span>
                    <div className="flex justify-between flex-wrap gap-2 break-words text-sm sm:text-base">
                      <p className="font-semibold text-gray-900">{exp.role} — {exp.company}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{exp.duration}</p>
                    </div>
                    <p className="mt-1 sm:mt-2 text-gray-700 leading-relaxed break-words text-sm sm:text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {data.projects.length > 0 && (
            <section className="relative p-4 sm:p-6 bg-white rounded-xl shadow-md overflow-hidden">
              <h2 className="text-md sm:text-lg font-semibold border-b border-gray-300 pb-1 mb-2 sm:mb-4">Projects</h2>
              <div className="space-y-4 sm:space-y-5">
                {data.projects.map(p => (
                  <div key={p.id} className="break-words text-sm sm:text-base">
                    <p className="font-semibold text-gray-900">{p.title}</p>
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
