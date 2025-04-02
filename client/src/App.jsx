import { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import Login from "./component/Login.jsx";
import Register from "./component/Registration.jsx";
import Todo from "./component/Todo.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("home");
  };

  return (
    <div>
      {/* Navbar is always present */}
      <Navbar setPage={setPage} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      {/* Show Login or Register if not logged in */}
      {!isLoggedIn && page === "login" && <Login setPage={setPage} setIsLoggedIn={setIsLoggedIn} />}
      {!isLoggedIn && page === "register" && <Register setPage={setPage} setIsLoggedIn={setIsLoggedIn} />}

      {/* Show Todo when logged in */}
      {isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center">
          <Todo />
        </div>
      ) : (
        page === "home" && (
          <div className="min-h-screen flex items-center justify-center text-white text-2xl">
            Welcome to the To-Do App. Please Login or Register to continue.
          </div>
        )
      )}
    </div>
  );
}
