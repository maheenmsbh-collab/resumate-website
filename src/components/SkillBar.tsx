// src/components/SkillBar.tsx
import { motion } from "framer-motion";
import type { Skill } from "../context/ResumeContext";

export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          className="h-3 bg-purple-500 rounded"
        />
      </div>
    </div>
  );
}
