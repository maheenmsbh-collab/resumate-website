import { useResume, type Skill } from "../context/ResumeContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SkillsPage() {
  const { state, dispatch } = useResume();
  const [name, setName] = useState("");
  const [level, setLevel] = useState(50);

  const handleAdd = () => {
    if (!name.trim()) return;
    const skill: Skill = { id: uuidv4(), name, level };
    dispatch({ type: "ADD_SKILL", payload: skill });
    setName("");
    setLevel(50);
  };

  const handleDelete = (id: string) =>
    dispatch({ type: "DELETE_SKILL", payload: id });

  return (
    <div className="space-y-7 max-w-3xl mx-auto p-4 sm:p-6 lg:p-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
          Skills
        </h1>
        <p className="text-sm text-gray-500 mt-1 text-center sm:text-left">
          Add skills and set your proficiency level
        </p>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-4 sm:p-6 space-y-2">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            placeholder="e.g. React, TypeScript, UI Design"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-lg border px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 w-full"
          />

          <div className="flex flex-col gap-1 flex-1">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">
                Proficiency
              </label>
              <span className="text-sm font-semibold text-purple-700">{level}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="h-11 w-full rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          Add Skill
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
          Added Skills
        </h2>

        {state.skills.length === 0 ? (
          <p className="text-sm text-gray-500 text-center sm:text-left">
            No skills added yet.
          </p>
        ) : (
          <div className="space-y-3">
            {state.skills.map((s) => (
              <div
                key={s.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border rounded-lg px-4 py-3 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 w-full">
                  <p className="font-medium text-gray-900">{s.name}</p>
                  <div className="w-full sm:w-40 h-2 bg-gray-200 rounded-full mt-2 sm:mt-0">
                    <div
                      className="h-2 rounded-full bg-purple-600"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(s.id)}
                  className="mt-2 sm:mt-0 text-sm text-red-500 hover:text-red-600 font-medium"
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
