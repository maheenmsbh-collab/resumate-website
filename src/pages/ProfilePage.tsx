import { useResume } from "../context/ResumeContext";
import { useState } from "react";

export default function ProfilePage() {
  const { state, dispatch } = useResume();
  const [name, setName] = useState(state.name);
  const [title, setTitle] = useState(state.title);
  const [profilePic, setProfilePic] = useState(state.profilePic || "");

  const handleSave = () => {
    dispatch({ type: "UPDATE_PROFILE", payload: { name, title, profilePic } });
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto p-4">
 
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
        <p className="text-sm text-gray-500 mt-1">
          This information appears at the top of your resume
        </p>
      </div>


      <div className="bg-white rounded-xl border border-black shadow-sm p-6 space-y-6">
     
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full border-2 border-purple-600 overflow-hidden bg-gray-100 flex items-center justify-center">
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-sm text-gray-400">No Photo</span>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleUpload} className="text-sm" />
            <p className="text-xs text-gray-500 mt-1">
              Recommended: square image, 300×300px
            </p>
          </div>
        </div>

 
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Maheen Misbah"
            className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

  
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Professional Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Frontend Developer | React & TypeScript"
            className="h-11 rounded-lg border border-black px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

       
        <button
          onClick={handleSave}
          className="h-11 w-full rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}
