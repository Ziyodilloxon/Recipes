// react redux
import { useSelector } from "react-redux";

// firebase imports
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// react toast
import toast from "react-hot-toast";

// components
import NavLinks from "./NavLinks";

// rrd imports
import { Link } from "react-router-dom";

function Navbar() {
  const handleOut = async () => {
    try {
      await signOut(auth);
      toast.success(
        <div>
          <h4>👋 Korishguncha</h4>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  const { user } = useSelector((state) => state.user);
  return (
    <header>
      <nav className="navbar site-container flex items-center">
        <div className="navbar-start">
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
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal flex gap-5 items-center">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div className="italic mr-3 font-bold flex flex-col items-center">
            {user && <p className="mr-3 ">{user.displayName}</p>}{" "}
            {user && <p className="mr-3 ">{user.email}</p>}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost w-16 h-16 btn-circle avatar"
            >
              <div className="w- rounded-full">
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
              className="mt-3 z-[1] p-2 gap-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm">
                  <Link to="/dashboard">Dashboard</Link>
                </button>
              </li>
              <li>
                <button className="btn btn-sm">
                  <Link to="/recipes">Create recipe</Link>
                </button>
              </li>
              <li>
                <button className="btn btn-sm">Change Theme</button>
              </li>
              <li>
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    handleOut();
                  }}
                >
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
