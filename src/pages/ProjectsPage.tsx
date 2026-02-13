import { useResume, type Project } from "../context/ResumeContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProjectsPage() {
  const { state, dispatch } = useResume();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !description.trim()) return;
    const newProj: Project = { id: uuidv4(), title, description };
    dispatch({ type: "ADD_PROJECT", payload: newProj });
    setTitle("");
    setDescription("");
  };

  const handleDelete = (id: string) =>
    dispatch({ type: "DELETE_PROJECT", payload: id });

  return (
    <div className="space-y-5 max-w-3xl mx-auto p-2 sm:p-6 lg:p-5">

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
          Projects
        </h1>
        <p className="text-sm text-gray-500 mt-1 text-center sm:text-left">
          Showcase your projects with title and description
        </p>
      </div>

      <div className="bg-white rounded-xl border border-black shadow-sm p-4 sm:p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <input
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            placeholder="Describe your project briefly"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-24 rounded-lg border border-black px-4 py-2 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none w-full"
          />
        </div>

        <button
          onClick={handleAdd}
          className="h-11 w-full rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          Add Project
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
          Added Projects
        </h2>

        {state.projects.length === 0 ? (
          <p className="text-sm text-gray-500 text-center sm:text-left">
            No projects added yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {state.projects.map((p) => (
              <div
                key={p.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between 
                           bg-white border border-black rounded-xl shadow-sm hover:shadow-md transition p-4"
              >
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-semibold text-gray-900">{p.title}</p>
                  <p className="text-sm text-gray-700">{p.description}</p>
                </div>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="mt-3 md:mt-0 text-sm text-red-500 hover:text-red-600 font-medium"
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
