// src/pages/SettingsPage.tsx
import TemplateSelector from "../components/TemplateSelector";
import { useResume } from "../context/ResumeContext";
import { exportResumeAsPDF } from "../utils/exportPDF";

export default function SettingsPage() {
  const { state, dispatch } = useResume();

  return (
    <div className="flex flex-col gap-6 p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Resume Settings</h1>

      {/* ---------------- Template Selector ---------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Select Resume Template</h2>
        <TemplateSelector />
      </section>

      {/* ---------------- Color Pickers ---------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Customize Colors</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-gray-700">Header Gradient Color</label>
            <input
              type="color"
              value={state.headerColor}
              onChange={(e) => dispatch({ type: "SET_HEADER_COLOR", payload: e.target.value })}
              className="w-16 h-10 cursor-pointer border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Accent Gradient Color</label>
            <input
              type="color"
              value={state.accentColor}
              onChange={(e) => dispatch({ type: "SET_ACCENT_COLOR", payload: e.target.value })}
              className="w-16 h-10 cursor-pointer border rounded"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Border Style Selector ---------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Border Style</h2>
        <select
          value={state.borderStyle}
          onChange={(e) =>
            dispatch({ type: "SET_BORDER_STYLE", payload: e.target.value as any })
          }
          className="border p-2 rounded w-40"
        >
          <option value="none">None</option>
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
        </select>
      </section>

      {/* ---------------- Export PDF ---------------- */}
      <section>
        <button
          onClick={exportResumeAsPDF}
          className="bg-green-600 text-white p-3 rounded hover:bg-green-700 w-64 mt-4"
        >
          Export as PDF
        </button>
      </section>
    </div>
  );
}
