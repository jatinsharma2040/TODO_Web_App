import { useState } from "react";

export default function Register({ setPage }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!email || !username || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email format!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
    setError("");
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Register</h2>

        {error && <p className="text-red-500 text-center text-md mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-600 text-lg">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-lg">Username</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-lg">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-lg">Confirm Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white text-lg p-3 rounded-md mt-4 hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>

        <p className="text-center text-gray-600 text-lg mt-4">
          Already have an account?{" "}
          <button
            onClick={() => setPage("login")} // Navigate to Login Page
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
