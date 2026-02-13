import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login, register } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSignUpMode && usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [isSignUpMode]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username.trim() || !password.trim()) {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    const success = login(username.trim(), password.trim());
    if (success) navigate("/dashboard");
    else setErrorMessage("Invalid credentials. Please try again.");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username.trim() || !password.trim()) {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    const success = register(username.trim(), password.trim());

    if (!success) {
      setErrorMessage(
        "This username already exists. Try adding symbols or letters to make it unique."
      );
      return;
    }

    setUsername("");
    setPassword("");
    setIsSignUpMode(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-900 to-purple-700 justify-center items-center">
        <img
          src="login.svg"
          alt="Resume Illustration"
          className="max-w-lg p-8"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-1 flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Welcome to <span className="text-purple-600">Resumate</span>
          </h1>
          <p className="mb-6 text-gray-600">
            Your path to a brighter professional future
          </p>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
              {errorMessage}
            </div>
          )}

          <form
            onSubmit={isSignUpMode ? handleSignUp : handleLogin}
            className="flex flex-col gap-4"
          >
            <input
              ref={usernameRef}
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errorMessage
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-purple-500"
              }`}
            />

            {/* PASSWORD FIELD WITH EYE ICON */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isSignUpMode ? (
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Log In
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Sign Up
              </button>
            )}
          </form>

          {!isSignUpMode ? (
            <p className="mt-4 text-center text-gray-500 text-sm">
              Don’t have an account?{" "}
              <button
                onClick={() => {
                  setIsSignUpMode(true);
                  setErrorMessage("");
                }}
                className="text-indigo-600 font-medium hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="mt-4 text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setIsSignUpMode(false);
                  setErrorMessage("");
                }}
                className="text-indigo-600 font-medium hover:underline"
              >
                Back to Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
