import type { ResumeState } from "../../../context/ResumeContext";

export default function TechSidebarTemplate({ data }: { data: ResumeState }) {
  return (
    <div
      id="resume-preview"
      className="flex flex-col md:flex-row max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden border-4 border-gray-300"
      style={{ minHeight: "1122px" }} 
    >
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 bg-purple-200 text-white p-6 sm:p-8 flex flex-col gap-8">
        {/* Profile */}
        <div className="flex flex-col items-center gap-4">
          {data.profilePic && (
            <img
              src={data.profilePic}
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full border-4 border-gray-600"
            />
          )}
          {data.name && (
            <h1 className="text-2xl font-bold text-white text-center break-words">{data.name}</h1>
          )}
          {data.title && (
            <p className="text-white text-center break-words">{data.title}</p>
          )}
        </div>

        {/* Contact Info */}
        {(data.email || data.phone || data.linkedin || data.github || data.website) && (
          <div className="p-4 border-l-4 border-indigo-400 rounded-md bg-purple-200">
            <h2 className="font-semibold mb-2 text-white border-b border-gray-600 pb-1">Contact</h2>
            <div className="text-sm text-white space-y-1 break-words">
              {data.email && <div>Email: {data.email}</div>}
              {data.phone && <div>Phone: {data.phone}</div>}
              {data.linkedin && (
                <div>
                  LinkedIn: <a href={data.linkedin} target="_blank" className="text-indigo-300 break-words">{data.linkedin}</a>
                </div>
              )}
              {data.github && (
                <div>
                  GitHub: <a href={data.github} target="_blank" className="text-indigo-300 break-words">{data.github}</a>
                </div>
              )}
              {data.website && (
                <div>
                  Website: <a href={data.website} target="_blank" className="text-indigo-300 break-words">{data.website}</a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="p-4 border-l-4 border-indigo-400 rounded-md bg-purple-200">
            <h2 className="font-semibold mb-2 text-white border-b border-gray-600 pb-1">Skills</h2>
            <ul className="list-disc ml-5 text-sm text-white space-y-1 break-words">
              {data.skills.map((s) => (
                <li key={s.id}>{s.name} - {s.level}%</li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/3 p-6 sm:p-8 flex flex-col gap-6 md:gap-8 text-gray-800 bg-gray-50 mt-6 md:mt-0">
        {/* About Section */}
        {data.about && (
          <section className="p-4 border-2 border-gray-300 rounded-md bg-white">
            <h2 className="font-bold text-lg border-b-2 border-indigo-400 pb-1 mb-2">About Me</h2>
            <p>{data.about}</p>
          </section>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <section className="p-4 border-2 border-gray-300 rounded-md bg-white">
            <h2 className="font-bold text-lg border-b-2 border-indigo-400 pb-1 mb-3">Experience</h2>
            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <p className="font-semibold">{exp.role}, {exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="p-4 border-2 border-gray-300 rounded-md bg-white">
            <h2 className="font-bold text-lg border-b-2 border-indigo-400 pb-1 mb-3">Projects</h2>
            <div className="space-y-4">
              {data.projects.map((p) => (
                <div key={p.id}>
                  <p className="font-semibold">{p.title}</p>
                  <p>{p.description}</p>
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="mt-1 w-full max-w-sm object-cover rounded border-2 border-gray-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="p-4 border-2 border-gray-300 rounded-md bg-white">
            <h2 className="font-bold text-lg border-b-2 border-indigo-400 pb-1 mb-3">Education</h2>
            <div className="space-y-2">
              {data.education.map((e) => (
                <p key={e.id} className="break-words">
                  <span className="font-semibold">{e.degree}</span>, {e.institution} · <span className="text-gray-500">{e.duration}</span>
                </p>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
