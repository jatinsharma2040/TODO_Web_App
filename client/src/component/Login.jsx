import { useState } from "react";

export default function Login({ setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simulated user credentials (Replace this with an API call)
  const validUser = { username: "admin", password: "1234" };

  const handleLogin = () => {
    if (username === validUser.username && password === validUser.password) {
      alert("Login successful!");
      setError("");
      setUsername(""); // Clear input after login
      setPassword("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Login</h2>

        {error && <p className="text-red-500 text-center text-lg">{error}</p>}

        <div className="mb-6">
          <label className="block text-gray-600 text-lg">Username/Email</label>
          <input
            type="text"
            name="username-field" // Unique name to prevent autofill
            autoComplete="off" // Disable autofill
            className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-lg">Password</label>
          <input
            type="password"
            name="password-field" // Unique name to prevent autofill
            autoComplete="new-password" // Prevent autofill
            className="w-full p-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white text-lg p-4 rounded-lg mt-6 hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-600 text-lg mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => setPage("register")} // Navigate to Register Page
            className="text-blue-500 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
