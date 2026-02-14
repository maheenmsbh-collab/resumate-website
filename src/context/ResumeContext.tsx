import React, { createContext, useReducer, useContext, useEffect, type ReactNode } from "react";
import { resumeTemplates } from "../components/resume/templates";

/* =========================
   TYPES & CONSTANTS
========================= */
export interface Experience { id: string; company: string; role: string; duration: string; description: string; }
export interface Project { id: string; title: string; description: string; image?: string; }
export interface Skill { id: string; name: string; level: number; }
export interface Education { id: string; institution: string; degree: string; duration: string; }

export interface ResumeState {
  name: string;
  title: string;
  about?: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  profilePic?: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  template: keyof typeof resumeTemplates;
  headerColor: string;
  accentColor: string;
  borderStyle: "none" | "solid" | "dashed" | "double";
  textColor?: string;
  backgroundColor?: string;
}

export const initialState: ResumeState = {
  name: "",
  title: "",
  about: "",
  email: "",
  phone: "",
  github: "",
  linkedin: "",
  website: "",
  profilePic: "",
  experiences: [],
  projects: [],
  skills: [],
  education: [],
  template: "minimal",
  headerColor: "#4f46e5",
  accentColor: "#10b981",
  borderStyle: "solid",
  textColor: "#111827",
  backgroundColor: "#ffffff",
};

export type Action =
  | { type: "UPDATE_PROFILE"; payload: Partial<ResumeState> }
  | { type: "ADD_EXPERIENCE"; payload: Experience }
  | { type: "UPDATE_EXPERIENCE"; payload: Experience }
  | { type: "DELETE_EXPERIENCE"; payload: string }
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "UPDATE_PROJECT"; payload: Project }
  | { type: "DELETE_PROJECT"; payload: string }
  | { type: "ADD_SKILL"; payload: Skill }
  | { type: "UPDATE_SKILL"; payload: Skill }
  | { type: "DELETE_SKILL"; payload: string }
  | { type: "ADD_EDUCATION"; payload: Education }
  | { type: "UPDATE_EDUCATION"; payload: Education }
  | { type: "DELETE_EDUCATION"; payload: string }
  | { type: "SET_TEMPLATE"; payload: keyof typeof resumeTemplates }
  | { type: "SET_HEADER_COLOR"; payload: string }
  | { type: "SET_ACCENT_COLOR"; payload: string }
  | { type: "SET_BORDER_STYLE"; payload: "none" | "solid" | "dashed" | "double" }
  | { type: "LOAD_RESUME"; payload: ResumeState }
  | { type: "RESET_RESUME" };

/* =========================
   CONTEXT
========================= */
const ResumeContext = createContext<{
  state: ResumeState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

/* =========================
   REDUCER
========================= */
const reducer = (state: ResumeState, action: Action): ResumeState => {
  switch (action.type) {
    case "UPDATE_PROFILE": return { ...state, ...action.payload };
    case "ADD_EXPERIENCE": return { ...state, experiences: [...state.experiences, action.payload] };
    case "UPDATE_EXPERIENCE": return { ...state, experiences: state.experiences.map(e => e.id === action.payload.id ? action.payload : e) };
    case "DELETE_EXPERIENCE": return { ...state, experiences: state.experiences.filter(e => e.id !== action.payload) };
    case "ADD_PROJECT": return { ...state, projects: [...state.projects, action.payload] };
    case "UPDATE_PROJECT": return { ...state, projects: state.projects.map(p => p.id === action.payload.id ? action.payload : p) };
    case "DELETE_PROJECT": return { ...state, projects: state.projects.filter(p => p.id !== action.payload) };
    case "ADD_SKILL": return { ...state, skills: [...state.skills, action.payload] };
    case "UPDATE_SKILL": return { ...state, skills: state.skills.map(s => s.id === action.payload.id ? action.payload : s) };
    case "DELETE_SKILL": return { ...state, skills: state.skills.filter(s => s.id !== action.payload) };
    case "ADD_EDUCATION": return { ...state, education: [...state.education, action.payload] };
    case "UPDATE_EDUCATION": return { ...state, education: state.education.map(e => e.id === action.payload.id ? action.payload : e) };
    case "DELETE_EDUCATION": return { ...state, education: state.education.filter(e => e.id !== action.payload) };
    case "SET_TEMPLATE": return { ...state, template: action.payload };
    case "SET_HEADER_COLOR": return { ...state, headerColor: action.payload };
    case "SET_ACCENT_COLOR": return { ...state, accentColor: action.payload };
    case "SET_BORDER_STYLE": return { ...state, borderStyle: action.payload };
    case "LOAD_RESUME": return { ...initialState, ...action.payload };
    case "RESET_RESUME": return initialState;
    default: return state;
  }
};

/* =========================
   COMPONENT PROVIDER
========================= */
export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    () => {
      const stored = localStorage.getItem("resumeData");
      return stored ? JSON.parse(stored) : initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(state));
  }, [state]);

  return <ResumeContext.Provider value={{ state, dispatch }}>{children}</ResumeContext.Provider>;
};

/* =========================
   HOOK
========================= */
export const useResume = () => useContext(ResumeContext);
