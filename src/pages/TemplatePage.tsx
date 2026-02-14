import { useResume } from "../context/ResumeContext";
import { resumeTemplates } from "../components/resume/templates";

export default function TemplatesPage() {
  const { state, dispatch } = useResume();

  // Fix: templateKey must be a valid key of resumeTemplates
  const handleSelect = (templateKey: keyof typeof resumeTemplates) => {
    dispatch({ type: "SET_TEMPLATE", payload: templateKey });
  };

  return (
    <div className="space-y-6 p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">Choose a Resume Template</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(resumeTemplates).map((key) => {
          // TS fix: assert key as keyof typeof resumeTemplates
          const templateKey = key as keyof typeof resumeTemplates;
          const TemplateComp = resumeTemplates[templateKey];
          const isSelected = state.template === templateKey;
          console.log(TemplateComp)

          return (
            <div
              key={templateKey}
              onClick={() => handleSelect(templateKey)}
              className={`border rounded-xl cursor-pointer overflow-hidden shadow-sm transition transform hover:scale-105 ${
                isSelected ? "border-purple-600" : "border-gray-300"
              }`}
            >
              <div className="bg-white h-40 flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-700">{templateKey}</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-sm text-gray-400 font-light mt-2">
        Better to fill your resume first, then try templates for better selection.
      </p>
    </div>
  );
}
