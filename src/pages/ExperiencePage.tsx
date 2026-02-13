import { useResume, type Experience } from "../context/ResumeContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ExperiencePage() {
  const { state, dispatch } = useResume();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!company.trim() || !role.trim() || !duration.trim()) return;
    const newExp: Experience = { id: uuidv4(), company, role, duration, description };
    dispatch({ type: "ADD_EXPERIENCE", payload: newExp });
    setCompany(""); setRole(""); setDuration(""); setDescription("");
  };

  const handleDelete = (id: string) =>
    dispatch({ type: "DELETE_EXPERIENCE", payload: id });

  return (
    <div className="space-y-8 max-w-3xl mx-auto p-4 sm:p-6 lg:p-5">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
          Experience
        </h1>
        <p className="text-sm text-gray-500 mt-1 text-center sm:text-left">
          Add your professional experience
        </p>
      </div>

      <div className="bg-white rounded-xl border border-black shadow-sm p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 w-full"
          />
          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 w-full"
          />
        </div>

        <input
          placeholder="Duration (e.g. Jan 2020 - Dec 2022)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />

        <textarea
          placeholder="Brief description of responsibilities / achievements"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-24 rounded-lg border border-black px-4 py-2 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none w-full"
        />

        <button
          onClick={handleAdd}
          className="h-11 w-full rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          Add Experience
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
          Added Experiences
        </h2>

        {state.experiences.length === 0 ? (
          <p className="text-sm text-gray-500 text-center sm:text-left">
            No experiences added yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {state.experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border border-black rounded-xl shadow-sm hover:shadow-md transition p-4"
              >
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-semibold text-gray-900">
                    {exp.role} at {exp.company}
                  </p>
                  <p className="text-sm text-gray-700">{exp.duration}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                  )}
                </div>

                <button
                  onClick={() => handleDelete(exp.id)}
                  className="mt-2 md:mt-0 text-sm text-red-500 hover:text-red-600 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
