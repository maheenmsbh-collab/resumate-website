import type {
  ResumeState,
  Experience,
  Project,
  Education
} from "../../../context/ResumeContext";


export default function ElegantTimelineTemplate({ data }: { data: ResumeState }) {
  const accent = data.headerColor || "#6366f1"; // purple accent

  return (
    <div
      id="resume-preview"
      className="max-w-5xl mx-auto min-h-[1122px] bg-white shadow-xl font-sans flex flex-col md:flex-row border border-gray-200 overflow-hidden"
    >
      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-1/3 bg-gray-100 p-6 sm:p-8 flex flex-col justify-between h-auto md:h-full">
        <div className="space-y-6">
          {/* Name & Title */}
          {data.name && <h1 className="text-xl sm:text-2xl font-bold break-words">{data.name}</h1>}
          {data.title && <p className="text-sm text-gray-600 break-words">{data.title}</p>}

          {/* About */}
          {data.about && (
            <div>
              <h2 className="text-sm font-semibold uppercase mb-1">About</h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 break-words">{data.about}</p>
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase mb-1">Skills</h2>
              <ul className="text-xs sm:text-sm space-y-1 text-gray-700">
                {data.skills.map((s) => (
                  <li key={s.id} className="break-words">
                    {s.name} — {s.level}%
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="text-xs sm:text-sm space-y-1 mt-6">
          {data.email && <div className="break-words">Email: {data.email}</div>}
          {data.phone && <div className="break-words">Phone: {data.phone}</div>}
          {data.linkedin && (
            <div className="break-words">
              LinkedIn: <a href={data.linkedin} target="_blank" className="text-blue-600">{data.linkedin}</a>
            </div>
          )}
          {data.github && (
            <div className="break-words">
              GitHub: <a href={data.github} target="_blank" className="text-blue-600">{data.github}</a>
            </div>
          )}
          {data.website && (
            <div className="break-words">
              Website: <a href={data.website} target="_blank" className="text-blue-600">{data.website}</a>
            </div>
          )}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 sm:p-10 relative mt-6 md:mt-0">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute top-10 left-8 bottom-10 w-[2px] bg-gray-300" />

        {/* EXPERIENCE */}
        {data.experiences.length > 0 && (
          <TimelineSection title="Experience" items={data.experiences} accent={accent} />
        )}

        {/* PROJECTS */}
        {data.projects.length > 0 && (
          <TimelineSection title="Projects" items={data.projects} accent={accent} />
        )}

        {/* EDUCATION */}
        {data.education.length > 0 && (
          <TimelineSection title="Education" items={data.education} accent={accent} />
        )}
      </main>
    </div>
  );
}

/* ---------------- Timeline Section ---------------- */
function TimelineSection({
  title,
  items,
  accent,
}: {
  title: string;
items: (Experience | Project | Education)[];

  accent: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mb-8 md:mb-12 relative pl-0 md:pl-16">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <TimelineRow
            key={item.id}
            // title={item.role || item.title || `${item.degree} — ${item.institution}`}
            title={
  "role" in item
    ? `${item.role} — ${item.company}`
    : "title" in item
    ? item.title
    : `${item.degree} — ${item.institution}`
}

            // period={item.duration}
            period={"duration" in item ? item.duration : undefined}

            // description={item.description || ""}
            description={"description" in item ? item.description : undefined}

            accent={accent}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Timeline Row ---------------- */
function TimelineRow({
  title,
  period,
  description,
  accent,
}: {
  title: string;
  period?: string;
  description?: string;
  accent: string;
}) {
  return (
    <div className="relative">
      {/* Dot */}
      <span
        className="hidden md:inline absolute -left-[16px] top-1 w-4 h-4 rounded-full border-2 border-white shadow"
        style={{ backgroundColor: accent }}
      />

      <div className="flex justify-between flex-wrap gap-2 pl-0 md:pl-2">
        <p className="font-medium text-gray-900 break-words">{title}</p>
        {period && <span className="text-sm text-gray-500 whitespace-nowrap">{period}</span>}
      </div>

      {description && (
        <p className="mt-1 text-gray-700 text-sm leading-relaxed break-words">{description}</p>
      )}
    </div>
  );
}
