import { useState } from "react";

export default function Navbar({ setPage, isLoggedIn, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 border-b-4 border-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center"
        <h1 className="text-white text-2xl font-bold">To Do App</h1>

        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => setPage("login")}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white"
              >
                Login
              </button>
              <button
                onClick={() => setPage("register")}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white"
              >
                Register
              </button>
            </>
          )}
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => setPage("login")}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white"
              >
                Login
              </button>
              <button
                onClick={() => setPage("register")}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white"
              >
                Register
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
