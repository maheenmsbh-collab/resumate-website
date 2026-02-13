import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../context/ResumeContext";
import { useAuth } from "../context/AuthContext";

export default function SavedResumes() {
  const navigate = useNavigate();
  const { dispatch } = useResume();
  const { user } = useAuth();

  // State to hold saved resumes
  const [savedResumes, setSavedResumes] = useState<any[]>([]);

  const key = `savedResumes_${user}`;

  // Load saved resumes when component mounts or user changes
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    setSavedResumes(saved);
  }, [user, navigate, key]);

  const openResume = (resume: any) => {
    dispatch({ type: "LOAD_RESUME", payload: resume.data });
    navigate("/dashboard/build");
  };

  const deleteResume = (id: string) => {
    // Filter out the deleted resume
    const updated = savedResumes.filter((r) => r.id !== id);
    // Update localStorage
    localStorage.setItem(key, JSON.stringify(updated));
    // Update state to re-render UI
    setSavedResumes(updated);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
      <section className="flex flex-col md:flex-row items-center w-full max-w-6xl mb-12 gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-2">
            Saved <span className="text-gray-500">Resumes</span>
          </h1>
          <p className="text-gray-600 text-md md:text-lg">
            You have <span className="font-semibold">{savedResumes.length}</span>{" "}
            saved resume{savedResumes.length !== 1 ? "s" : ""}. Manage and preview them easily.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/save.svg"
            alt="Saved Resumes Illustration"
            className="w-3/4 max-w-75 object-contain"
          />
        </div>
      </section>

      {savedResumes.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">No saved resumes yet</p>
          <p className="text-sm">Create and save your first resume</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {savedResumes.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {r.data.name || "Unnamed"}
                </h2>
                <p className="text-sm text-gray-500">{r.data.title || "No title"}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {r.data.skills?.slice(0, 3).map((s: any) => (
                    <span
                      key={s.id}
                      className="px-3 py-1 text-xs bg-purple-50 text-purple-700 rounded-full font-medium"
                    >
                      {s.name}
                    </span>
                  ))}
                  {r.data.experiences?.length > 0 && (
                    <span className="px-3 py-1 text-xs bg-purple-50 text-purple-700 rounded-full font-medium">
                      {r.data.experiences.length} Exp
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => openResume(r)}
                  className="flex-1 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                >
                  View Resume
                </button>

                <button
                  onClick={() => deleteResume(r.id)}
                  className="flex-1 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                >
                  Delete
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                {new Date(r.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-16" />
    </main>
  );
}
