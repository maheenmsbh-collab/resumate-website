import { NavLink } from "react-router-dom";

const tabs = [
  { name: "Profile", path: "/dashboard" },
  { name: "Experience", path: "/dashboard/experience" },
  { name: "Education", path: "/dashboard/education" },
  { name: "Skills", path: "/dashboard/skills" },
  { name: "Projects", path: "/dashboard/projects" },
];

export default function SectionTabs() {
  return (
    <div className="flex gap-2 bg-white p-2 rounded-xl shadow w-fit">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm transition ${
              isActive
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
}
