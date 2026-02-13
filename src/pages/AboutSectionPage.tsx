import { useResume } from "../context/ResumeContext";
import { useState } from "react";

export default function AboutSectionPage() {
  const { state, dispatch } = useResume();
  const [about, setAbout] = useState(state.about || "");

  const handleSave = () => {
    dispatch({
      type: "UPDATE_PROFILE",
      payload: { about },
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        About
      </h1>

      <textarea
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        rows={6}
        placeholder="Write your professional summary..."
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
      />

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Save
        </button>

        <a
          href="https://chat.openai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-yellow-400 text-white rounded-lg hover:brightness-110 transition flex items-center justify-center"
        >
          Enhance with ChatGPT
        </a>
      </div>

      <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
        Click "Enhance with ChatGPT" to open ChatGPT in a new tab and refine your about/summary.
      </p>
    </div>
  );
}
