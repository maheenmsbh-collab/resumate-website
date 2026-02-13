import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

import DashboardLayout from "./components/DashboardLayout";
import WebsiteLayout from "./components/WebsiteLayout";
import PublicLayout from "./components/PubllicLayout";

import BuildPage from "./pages/BuildPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import TemplatesPage from "./pages/TemplatePage";

import TemplateShowcasePage from "./components/resume/TemplateShowcase";
import AboutPage from "./pages/About";
import SavedResumes from "./pages/SavedResumes";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
import AboutSectionPage from "./pages/AboutSectionPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC PAGES */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          {/* WEBSITE PAGES */}
          <Route element={<WebsiteLayout />}>
            <Route path="/templateshowcase" element={<TemplateShowcasePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/saved" element={<SavedResumes />} />
          </Route>

          {/* DASHBOARD PAGES – PROTECTED */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<BuildPage />} />
            <Route path="build" element={<BuildPage />} />
            <Route path="aboutsection" element={<AboutSectionPage />} />

            <Route path="experience" element={<ExperiencePage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="templates" element={<TemplatesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
