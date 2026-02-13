import { useResume, type Education } from "../context/ResumeContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function EducationPage() {
  const { state, dispatch } = useResume();
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [duration, setDuration] = useState("");

  const handleAdd = () => {
    if (!institution.trim() || !degree.trim() || !duration.trim()) return;
    const edu: Education = { id: uuidv4(), institution, degree, duration };
    dispatch({ type: "ADD_EDUCATION", payload: edu });
    setInstitution("");
    setDegree("");
    setDuration("");
  };

  const handleDelete = (id: string) =>
    dispatch({ type: "DELETE_EDUCATION", payload: id });

  return (
    <div className="space-y-8 max-w-3xl mx-auto p-4 sm:p-6 lg:p-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
          Education
        </h1>
        <p className="text-sm text-gray-500 mt-1 text-center sm:text-left">
          Add your educational background
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl border border-black shadow-sm p-4 sm:p-6 space-y-4">
        {/* Institution & Degree */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Institution
            </label>
            <input
              placeholder="e.g. MIT"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition w-full"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Degree</label>
            <input
              placeholder="e.g. B.Sc. Computer Science"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition w-full"
            />
          </div>
        </div>

        {/* Duration & Add Button */}
        <div className="flex flex-col sm:flex-row gap-3 items-end">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Duration</label>
            <input
              placeholder="e.g. 2018 - 2022"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition w-full"
            />
          </div>

          <button
            onClick={handleAdd}
            className="h-11 w-28 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition flex-shrink-0"
          >
            Add
          </button>
        </div>
      </div>

      {/* Added Education List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
          Added Education
        </h2>

        {state.education.length === 0 ? (
          <p className="text-sm text-gray-500 text-center sm:text-left">
            No education added yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {state.education.map((e) => (
              <div
                key={e.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border border-black rounded-xl shadow-sm hover:shadow-md transition p-4"
              >
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-semibold text-gray-900">{e.degree}</p>
                  <p className="text-sm text-gray-700">
                    {e.institution} | {e.duration}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(e.id)}
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
