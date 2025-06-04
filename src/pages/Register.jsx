import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  // const { userGoogleSignIn, createUserWithEmailPass, updateUserInfo } =
  //   use(AuthContext);
  const { register, updateUserProfile, userGoogleSignIn } =
    use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };
  const errorAlert = (msg) => {
    Swal.fire({
      title: "Error!",
      text: `${msg}`,
      icon: "error",
      showConfirmButton: true,
    });
  };
  const handleSignUpWithEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const profileInfo = { name, photoUrl };
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    } else if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    } else {
      register(email, password)
        .then(() => {
          updateUserProfile(profileInfo);
          sweetAlert();
        })
        .catch((err) => errorAlert(err.message));
    }
  };
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then(() => {
        sweetAlert();
      })
      .catch((err) => errorAlert(err.message));
  };
  return (
    <div className="card bg-base-100 w-11/12 my-8 border border-base-300 max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-2xl font-bold md:text-4xl">Register now!</h1>
        <form onSubmit={handleSignUpWithEmail} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input border-1" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input border-1"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input border-1"
            placeholder="Password"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photoUrl"
            className="input border-1"
            placeholder="PhotoURL"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <p className="text-red-600">{error}</p>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p className="text-center text-gray-400">or,</p>
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-base-300 text-black "
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
      <p className="text-center pb-4">
        Already have an account?{" "}
        <NavLink to="/login">
          <span className="text-blue-700 hover:underline">Log in</span>
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
