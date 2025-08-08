import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const links = (
    <>
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-semibold" : ""
      }
    >
      Home
    </NavLink>
  </li>

  {user ? (
    <li>
      <NavLink
        to="/all-foods"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : ""
        }
      >
        Available Foods
      </NavLink>
    </li>
  ) : (
    <li>
      <NavLink
        to="/available-foods"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-semibold" : ""
        }
      >
        Available Foods
      </NavLink>
    </li>
  )}

  {user && (
    <>
      <li>
        <NavLink
          to="/add-a-food"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          Add a Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/manage-my-food/${user.email}`}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          Manage My Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/my-food-request/${user.email}`}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          My Food Request
        </NavLink>
      </li>
    </>
  )}

  <li>
    <NavLink
      to="/support"
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-semibold" : ""
      }
    >
      Support
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about-us"
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-semibold" : ""
      }
    >
      About Us
    </NavLink>
  </li>
</>

  );
  return (
    <div className="bg-white/60 backdrop-blur-sm shadow-sm sticky top-0 z-30">
      <div className="navbar max-w-[1600px]  w-11/12 mx-auto p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer hover:bg-[#8080800c] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="font-bold text-xl">
            Share<span className="text-blue-600">Bite</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img src={user.photoURL} className="w-10 mr-2 rounded-full" />
              <button
                onClick={() => {
                  logOut();
                }}
                className="btn border-none bg-blue-600 text-white btn-sm"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn border-none bg-blue-600 text-white btn-sm"
              >
                Log In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
