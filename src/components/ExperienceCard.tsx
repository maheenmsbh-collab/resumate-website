import type { Experience } from "../context/ResumeContext";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded mb-2">
      <p className="font-semibold">{experience.role} at {experience.company}</p>
      <p className="text-sm">{experience.duration}</p>
      <p>{experience.description}</p>
    </div>
  );
}
