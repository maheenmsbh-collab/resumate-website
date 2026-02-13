import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./Header";
import Sidebar from "./Sidebar";
import ResumePreview from "../components/ResumePreview";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState<"preview" | "form">("form");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <DashboardHeader />

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <Sidebar setActiveTab={setActiveTab} />

        {/* Mobile tab toggle */}
        <div className="md:hidden flex justify-center gap-2 bg-gray-50 border-b p-2 print:hidden">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "preview"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 shadow-sm"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("form")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "form"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 shadow-sm"
            }`}
          >
            Form
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-auto">
          {/* Resume Preview */}
          <div
            className={`flex-1 p-4 md:p-6 overflow-auto transition-all ${
              activeTab === "preview" ? "block" : "hidden md:block"
            } print:block`}
          >
            <ResumePreview />
          </div>

          {/* Form / Page */}
          <div
            className={`w-full md:w-[420px] bg-white border-l md:border-l p-4 md:p-6 overflow-auto transition-all ${
              activeTab === "form" ? "block" : "hidden md:block"
            } print:hidden`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
