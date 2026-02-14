// src/context/resume/resumeTypes.ts

import type { resumeTemplates } from "../components/resume/templates";


export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
}

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
