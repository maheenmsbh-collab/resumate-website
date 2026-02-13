import type { Project } from "../context/ResumeContext";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded mb-2">
      <p className="font-semibold">{project.title}</p>
      <p>{project.description}</p>
    </div>
  );
}
