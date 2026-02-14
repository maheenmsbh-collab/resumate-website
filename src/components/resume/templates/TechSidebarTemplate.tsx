import type { ResumeState } from "../../../context/ResumeContext";

export default function TechSidebarTemplate({ data }: { data: ResumeState }) {
  return (
    <div
      id="resume-preview"
      className="flex flex-col md:flex-row mx-auto rounded-xl overflow-hidden border-4 shadow-2xl"
      style={{
        backgroundColor: "#FFFFFF", // light background
        borderColor: "#E5E7EB",     // light border
        minHeight: "1122px",
        maxWidth: "850px",
      }}
    >
      {/* Sidebar */}
      <aside
        className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col gap-8"
        style={{ backgroundColor: "#EDE9FE", color: "#111827" }} // light lavender background, dark text
      >
        {/* Profile */}
        <div className="flex flex-col items-center gap-4">
          {data.profilePic && (
            <img
              src={data.profilePic}
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full"
              style={{ border: "4px solid #D1D5DB" }} // light gray border
            />
          )}
          {data.name && <h1 className="text-2xl font-bold text-center break-words">{data.name}</h1>}
          {data.title && <p className="text-center break-words">{data.title}</p>}
        </div>

        {/* Contact Info */}
        {(data.email || data.phone || data.linkedin || data.github || data.website) && (
          <div
            className="p-4 rounded-md"
            style={{ borderLeft: "4px solid #C4B5FD", backgroundColor: "#F5F3FF" }} // soft light
          >
            <h2 className="font-semibold mb-2 pb-1 border-b" style={{ borderColor: "#D1D5DB" }}>
              Contact
            </h2>
            <div className="text-sm space-y-1 break-words">
              {data.email && <div>Email: {data.email}</div>}
              {data.phone && <div>Phone: {data.phone}</div>}
              {data.linkedin && (
                <div>
                  LinkedIn:{" "}
                  <a href={data.linkedin} target="_blank" style={{ color: "#A78BFA" }}>
                    {data.linkedin}
                  </a>
                </div>
              )}
              {data.github && (
                <div>
                  GitHub:{" "}
                  <a href={data.github} target="_blank" style={{ color: "#A78BFA" }}>
                    {data.github}
                  </a>
                </div>
              )}
              {data.website && (
                <div>
                  Website:{" "}
                  <a href={data.website} target="_blank" style={{ color: "#A78BFA" }}>
                    {data.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div
            className="p-4 rounded-md"
            style={{ borderLeft: "4px solid #C4B5FD", backgroundColor: "#F5F3FF" }}
          >
            <h2 className="font-semibold mb-2 pb-1 border-b" style={{ borderColor: "#D1D5DB" }}>
              Skills
            </h2>
            <ul className="list-disc ml-5 text-sm space-y-1 break-words">
              {data.skills.map(s => (
                <li key={s.id}>{s.name} - {s.level}%</li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main
        className="w-full md:w-2/3 p-6 sm:p-8 flex flex-col gap-6 md:gap-8 mt-6 md:mt-0"
        style={{ backgroundColor: "#FAFAFA", color: "#111827" }} // very light gray
      >
        {/* About */}
        {data.about && (
          <section className="p-4 rounded-md" style={{ border: "2px solid #E5E7EB", backgroundColor: "#FFFFFF" }}>
            <h2 className="font-bold text-lg border-b pb-1 mb-2" style={{ borderColor: "#C4B5FD" }}>
              About Me
            </h2>
            <p>{data.about}</p>
          </section>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <section className="p-4 rounded-md" style={{ border: "2px solid #E5E7EB", backgroundColor: "#FFFFFF" }}>
            <h2 className="font-bold text-lg border-b pb-1 mb-3" style={{ borderColor: "#C4B5FD" }}>
              Experience
            </h2>
            <div className="space-y-4">
              {data.experiences.map(exp => (
                <div key={exp.id}>
                  <p className="font-semibold">{exp.role}, {exp.company}</p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>{exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="p-4 rounded-md" style={{ border: "2px solid #E5E7EB", backgroundColor: "#FFFFFF" }}>
            <h2 className="font-bold text-lg border-b pb-1 mb-3" style={{ borderColor: "#C4B5FD" }}>Projects</h2>
            <div className="space-y-4">
              {data.projects.map(p => (
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
          <section className="p-4 rounded-md" style={{ border: "2px solid #E5E7EB", backgroundColor: "#FFFFFF" }}>
            <h2 className="font-bold text-lg border-b pb-1 mb-3" style={{ borderColor: "#C4B5FD" }}>Education</h2>
            <div className="space-y-2">
              {data.education.map(e => (
                <p key={e.id} className="break-words">
                  <span className="font-semibold">{e.degree}</span>, {e.institution} ·{" "}
                  <span style={{ color: "#6B7280" }}>{e.duration}</span>
                </p>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
