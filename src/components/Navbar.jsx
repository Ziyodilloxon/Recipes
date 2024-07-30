import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dracula");

  const handleOut = async () => {
    try {
      await signOut(auth);
      toast.success("👋 Korishguncha", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error(`Xatolik: ${error.message}`);
    }
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "dracula";
    const newTheme = currentTheme === "dracula" ? "winter" : "dracula";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dracula";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const { user } = useSelector((state) => state.user);

  return (
    <header>
      <nav className="navbar site-container flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <img
                className="rounded-full"
                src="https://img.freepik.com/premium-vector/kitchen-logo_663422-352.jpg?w=360"
                alt="Logo"
                width={50}
                height={50}
              />
              MyKitchen
            </h2>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden btn btn-ghost w-12 h-12 btn-circle ml-auto"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="menu menu-horizontal flex gap-5 items-center">
            <NavLinks />
          </ul>
        </div>

        <div
          className={`fixed top-0 left-0 w-full bg-gray-100 shadow-md transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } h-full overflow-auto z-50 lg:hidden`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 text-gray-800 right-4 text-3xl"
          >
            &times;
          </button>
          <ul className="menu p-4 flex flex-col gap-5">
            <li className="text-gray-700">
              <Link to="/dashboard" className="block p-4 text-lg">
                Dashboard
              </Link>
            </li>
            <li className="text-gray-700">
              <Link to="/recipes" className="block p-4 text-lg">
                Create recipe
              </Link>
            </li>
            <li className="text-gray-700">
              <button onClick={toggleTheme} className="block p-4 text-lg">
                Change Theme
              </button>
            </li>
            <li className="text-gray-700">
              <button className="block p-4 text-lg" onClick={handleOut}>
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="italic mr-3 font-bold hidden lg:flex flex-col items-center">
            {user && <p className="mr-3">{user.displayName}</p>}
            {user && <p className="mr-3">{user.email}</p>}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost w-16 h-16 btn-circle avatar"
            >
              <div className="w-16 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : `https://api.dicebear.com/9.x/initials/svg?seed=${user.displayName}`
                  }
                  alt={`${user.displayName ?? "user"} image`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 gap-5 shadow flex  menu menu-sm dropdown-content bg-base-100 rounded-box w-52 hidden lg:block flex gap-10 flex-col"
            >
              <li className="mb-4">
                <button className="btn btn-sm">
                  <Link to="/dashboard">Dashboard</Link>
                </button>
              </li>
              <li className="mb-4">
                <button className="btn btn-sm">
                  <Link to="/recipes">Create recipe</Link>
                </button>
              </li>
              <li className="mb-4">
                <button className="btn btn-sm" onClick={toggleTheme}>
                  Change Theme
                </button>
              </li>
              <li className="mb-4">
                <button className="btn btn-sm" onClick={handleOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
