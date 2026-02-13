import { useResume } from "../context/ResumeContext";

export default function BuildPage() {
  const { state, dispatch } = useResume();

  const handleChange = (field: keyof typeof state) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "UPDATE_PROFILE",
      payload: { [field]: e.target.value },
    });
  };

  const handleSave = () => {
    console.log("Profile saved!", state);
  };

  const inputClass =
    "p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition";

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-8 px-4 sm:px-0">
      <h2 className="text-xl font-semibold text-center sm:text-left">Profile</h2>

      <input
        className={inputClass}
        placeholder="Full Name"
        value={state.name}
        onChange={handleChange("name")}
      />

      <input
        className={inputClass}
        placeholder="Professional Title"
        value={state.title}
        onChange={handleChange("title")}
      />

      <input
        className={inputClass}
        placeholder="Email"
        value={state.email}
        onChange={handleChange("email")}
      />

      <input
        className={inputClass}
        placeholder="Phone"
        value={state.phone}
        onChange={handleChange("phone")}
      />

      <input
        className={inputClass}
        placeholder="GitHub"
        value={state.github}
        onChange={handleChange("github")}
      />

      <input
        className={inputClass}
        placeholder="LinkedIn"
        value={state.linkedin}
        onChange={handleChange("linkedin")}
      />

      <input
        className={inputClass}
        placeholder="Website"
        value={state.website}
        onChange={handleChange("website")}
      />

      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition w-full sm:w-auto"
      >
        Save
      </button>
    </div>
  );
}
