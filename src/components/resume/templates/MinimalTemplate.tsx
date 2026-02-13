import type { ResumeState } from "../../../context/ResumeContext";

export default function Minimal({ data }: { data: ResumeState }) {
  return (
    <div
      id="resume-preview"
      className="flex flex-col gap-6 w-full p-6 bg-white shadow-lg"
      style={{
        border: `4px ${data.borderStyle} ${data.headerColor}`,
        borderRadius: "10px",
      }}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center border-b-4 pb-3 mb-4"
        style={{ borderColor: data.headerColor }}
      >
        <div>
          <h1 className="text-3xl font-bold">{data.name || "Your Name"}</h1>
          <p className="text-lg text-gray-700 font-medium">{data.title || "Your Title"}</p>
        </div>
        {data.profilePic && (
          <img
            src={data.profilePic}
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full border-4 border-gray-600"
          />
        )}
      </div>

      {/* Contact Info */}
      {(data.email || data.phone || data.linkedin || data.github || data.website) && (
        <div className="p-4 border-2 rounded-md border-gray-700 bg-gray-50">
          <h3 className="font-semibold mb-2 text-gray-800">Contact Info</h3>
          {data.email && <div>Email: {data.email}</div>}
          {data.phone && <div>Phone: {data.phone}</div>}
          {data.linkedin && (
            <div>
              LinkedIn: <a href={data.linkedin} target="_blank" className="text-blue-600">{data.linkedin}</a>
            </div>
          )}
          {data.github && (
            <div>
              GitHub: <a href={data.github} target="_blank" className="text-blue-600">{data.github}</a>
            </div>
          )}
          {data.website && (
            <div>
              Website: <a href={data.website} target="_blank" className="text-blue-600">{data.website}</a>
            </div>
          )}
        </div>
      )}

      {/* About Section */}
      {data.about && (
        <div className="p-4 border-2 rounded-md border-gray-700 bg-gray-50">
          <h3 className="font-semibold border-b-2 pb-1 text-gray-800">About Me</h3>
          <p className="text-gray-700 mt-2">{data.about}</p>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="p-4 border-2 rounded-md border-gray-700 bg-gray-50">
          <h3 className="font-semibold border-b-2 pb-1 text-gray-800">Skills</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {data.skills.map((s) => (
              <li key={s.id}>{s.name} - {s.level}%</li>
            ))}
          </ul>
        </div>
      )}

      {/* Experiences */}
      {data.experiences.length > 0 && (
        <div className="p-4 border-2 rounded-md border-gray-700 bg-gray-50">
          <h3 className="font-semibold border-b-2 pb-1 text-gray-800">Experience</h3>
          <div className="mt-2 space-y-3 text-gray-700">
            {data.experiences.map((e) => (
              <div key={e.id}>
                <p className="font-bold">{e.role} @ {e.company}</p>
                <p className="text-sm text-gray-600">{e.duration}</p>
                <p>{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="p-4 border-2 rounded-md border-gray-700 bg-gray-50">
          <h3 className="font-semibold border-b-2 pb-1 text-gray-800">Projects</h3>
          <div className="mt-2 space-y-3 text-gray-700">
            {data.projects.map((p) => (
              <div key={p.id}>
                <p className="font-bold">{p.title}</p>
                <p>{p.description}</p>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="mt-1 w-full max-w-xs object-cover rounded border-2 border-gray-600"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="p-4 border-2 rounded-md border-gray-700 bg-gray-50">
          <h3 className="font-semibold border-b-2 pb-1 text-gray-800">Education</h3>
          <div className="mt-2 space-y-2 text-gray-700">
            {data.education.map((e) => (
              <div key={e.id}>
                <p className="font-bold">{e.degree} @ {e.institution}</p>
                <p className="text-sm text-gray-600">{e.duration}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
