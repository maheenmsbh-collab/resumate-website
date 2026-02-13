// import {
//   createContext,
//   useState,
//   useContext,
//   useEffect,
//   type ReactNode,
// } from "react";

// interface AuthContextType {
//   user: string | null;
//   login: (username: string, password: string) => boolean;
//   logout: () => void;
//   register: (username: string, password: string) => boolean;
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   login: () => false,
//   logout: () => {},
//   register: () => false,
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<string | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     if (storedUser) setUser(storedUser);
//   }, []);

//   // LOGIN
//   const login = (username: string, password: string) => {
//     const users = JSON.parse(localStorage.getItem("users") || "{}");

//     if (users[username] && users[username] === password) {
//       localStorage.setItem("currentUser", username);
//       setUser(username);
//       return true;
//     }

//     // ❌ No alert here
//     return false;
//   };

//   // REGISTER
//   const register = (username: string, password: string) => {
//     const users = JSON.parse(localStorage.getItem("users") || "{}");

//     if (users[username]) {
//       // ❌ No alert here
//       return false;
//     }

//     users[username] = password;
//     localStorage.setItem("users", JSON.stringify(users));
//     return true;
//   };

//   const logout = () => {
//     localStorage.removeItem("currentUser");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useState, useContext, useEffect, type ReactNode } from "react";
import { useResume } from "./ResumeContext";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, password: string) => boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  register: () => false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const { dispatch } = useResume();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username] && users[username] === password) {
      localStorage.setItem("currentUser", username);
      setUser(username);

      // 🔥 Reset resume to defaults on login
      dispatch({ type: "RESET_RESUME" });

      return true;
    }
    return false;
  };

  const register = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username]) return false;

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

