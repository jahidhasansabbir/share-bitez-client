import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-a-food">Add a Food</NavLink>
      </li>
      <li>
        <NavLink to="/available-foods">Available Foods</NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li>
            <NavLink to="/manage-my-food">Manage My Food</NavLink>
          </li>
          <li>
            <NavLink to="/my-food-request">My Food Request</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img src={user.photoURL} className="w-10 mr-2" />
            <button
              onClick={() => {
                logOut();
              }}
              className="btn border-none"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/register" className="btn border-none">
              Sign Up
            </NavLink>
            <NavLink to="/log-in" className="btn border-none">
              Log In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
