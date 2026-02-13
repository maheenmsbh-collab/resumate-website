import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

export default function DashboardHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/about");
    setIsMenuOpen(false);
  };

  return (
    <header className="h-20 bg-purple-700 text-white flex items-center justify-between px-4 sm:px-10 shadow-md relative">
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="h-10 w-10 rounded-lg bg-yellow-400 flex items-center justify-center text-purple-900 font-extrabold text-xl">
          R
        </div>
        <span className="text-2xl font-bold tracking-wide hidden sm:inline">
          <span className="text-yellow-400">Resumate</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex items-center gap-6 text-base font-medium">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/dashboard/build">Build Resume</HeaderLink>
        <HeaderLink to="/templateshowcase">Templates</HeaderLink>
        <HeaderLink to="/saved">Saved</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>

        {user && (
          <button
            onClick={handleLogout}
            className="ml-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Logout
          </button>
        )}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden p-2 rounded-md hover:bg-purple-600 transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-purple-700 text-white flex flex-col gap-4 p-4 sm:hidden z-20 shadow-md">
          <HeaderLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </HeaderLink>
          <HeaderLink to="/dashboard/build" onClick={() => setIsMenuOpen(false)}>
            Build Resume
          </HeaderLink>
          <HeaderLink to="/templateshowcase" onClick={() => setIsMenuOpen(false)}>
            Templates
          </HeaderLink>
          <HeaderLink to="/saved" onClick={() => setIsMenuOpen(false)}>
            Saved
          </HeaderLink>
          <HeaderLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </HeaderLink>

          {user && (
            <button
              onClick={handleLogout}
              className="mt-2 bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}

function HeaderLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "text-yellow-400"
          : "text-white/90 hover:text-yellow-300 transition"
      }
    >
      {children}
    </NavLink>
  );
}
