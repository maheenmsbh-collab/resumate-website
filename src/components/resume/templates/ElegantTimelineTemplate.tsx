import type { ResumeState, Experience, Project, Education } from "../../../context/ResumeContext";

export default function ElegantTimelineTemplate({ data }: { data: ResumeState }) {
  const accent = "#6366f1"; // PDF-friendly fixed hex color
  const sidebarBg = "#f3f4f6"; // light gray instead of Tailwind class
  const lineColor = "#d1d5db"; // timeline line color (gray-300)

  return (
    <div
      id="resume-preview"
      className="max-w-5xl mx-auto min-h-[1122px] shadow-xl font-sans flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: "#ffffff", borderColor: lineColor, borderWidth: 1 }}
    >
      {/* LEFT SIDEBAR */}
      <aside
        className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col justify-between h-auto md:h-full"
        style={{ backgroundColor: sidebarBg }}
      >
        <div className="space-y-6">
          {data.name && (
            <h1 className="text-xl sm:text-2xl font-bold break-words" style={{ color: "#111827" }}>
              {data.name}
            </h1>
          )}
          {data.title && (
            <p className="text-sm break-words" style={{ color: "#1f2937" }}>
              {data.title}
            </p>
          )}

          {data.about && (
            <div>
              <h2 className="text-sm font-semibold uppercase mb-1" style={{ color: "#374151" }}>
                About
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed break-words" style={{ color: "#4b5563" }}>
                {data.about}
              </p>
            </div>
          )}

          {data.skills.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase mb-1" style={{ color: "#374151" }}>
                Skills
              </h2>
              <ul className="text-xs sm:text-sm space-y-1" style={{ color: "#4b5563" }}>
                {data.skills.map((s) => (
                  <li key={s.id} className="break-words">
                    {s.name} — {s.level}%
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="text-xs sm:text-sm space-y-1 mt-6">
          {data.email && <div className="break-words">{`Email: ${data.email}`}</div>}
          {data.phone && <div className="break-words">{`Phone: ${data.phone}`}</div>}
          {data.linkedin && (
            <div className="break-words">
              LinkedIn: <a href={data.linkedin} target="_blank" style={{ color: accent }}>{data.linkedin}</a>
            </div>
          )}
          {data.github && (
            <div className="break-words">
              GitHub: <a href={data.github} target="_blank" style={{ color: accent }}>{data.github}</a>
            </div>
          )}
          {data.website && (
            <div className="break-words">
              Website: <a href={data.website} target="_blank" style={{ color: accent }}>{data.website}</a>
            </div>
          )}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 sm:p-10 relative mt-6 md:mt-0">
        <div
          className="hidden md:block absolute top-10 left-8 bottom-10 w-[2px]"
          style={{ backgroundColor: lineColor }}
        />

        {data.experiences.length > 0 && (
          <TimelineSection title="Experience" items={data.experiences} accent={accent} />
        )}
        {data.projects.length > 0 && (
          <TimelineSection title="Projects" items={data.projects} accent={accent} />
        )}
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
      <h2 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>{title}</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <TimelineRow
            key={item.id}
            title={
              "role" in item
                ? `${item.role} — ${item.company}`
                : "title" in item
                ? item.title
                : `${item.degree} — ${item.institution}`
            }
            period={"duration" in item ? item.duration : undefined}
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
      <span
        className="hidden md:inline absolute -left-[16px] top-1 w-4 h-4 rounded-full border-2 border-white shadow"
        style={{ backgroundColor: accent }}
      />
      <div className="flex justify-between flex-wrap gap-2 pl-0 md:pl-2">
        <p className="font-medium break-words" style={{ color: "#111827" }}>{title}</p>
        {period && <span className="text-sm whitespace-nowrap" style={{ color: "#6b7280" }}>{period}</span>}
      </div>
      {description && (
        <p className="mt-1 text-sm leading-relaxed break-words" style={{ color: "#4b5563" }}>{description}</p>
      )}
    </div>
  );
}
