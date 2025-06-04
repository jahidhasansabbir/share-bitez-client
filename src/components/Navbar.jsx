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
            <NavLink to={`/manage-my-food/${user.email}`}>Manage My Food</NavLink>
          </li>
          <li>
            <NavLink to={`/my-food-request/${user.email}`}>My Food Request</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="cursor-pointer hover:bg-[#8080800c] lg:hidden">
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
        <NavLink to='/' className="font-bold text-xl">Share<span className="text-blue-700">Bite</span></NavLink>
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
              className="btn border-none bg-blue-700 text-white btn-sm"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/register" className="btn border-none mr-4 bg-blue-700 text-white btn-sm">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="btn border-none bg-blue-700 text-white btn-sm">
              Log In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
