// src/context/authTypes.ts
export interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, password: string) => boolean;
}
