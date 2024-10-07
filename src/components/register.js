import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  userSignFailure,
  userSignStart,
  userSignSuccess,
} from "../slice/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const confirmPasswordValue = useRef();
  const dispatch = useDispatch();
  const { isLoading, error, LoggedIn } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = async (e) => {
    e.preventDefault();
    if (confirmPasswordValue.current.value !== password) {
      dispatch(userSignFailure("passwords do not match"));
    } else {
      try {
        dispatch(userSignStart());
        const userCreate = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("success", userCreate.user.email);
        navigate("/");
        dispatch(userSignFailure(""));
      } catch (error) {
        dispatch(userSignFailure(error.message));
        console.log("failure", error.message);
      }
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser.email);
      dispatch(userSignSuccess(currentUser.email));
    });
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={signUp} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              ref={confirmPasswordValue}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className={`${error}` ? "" : "hidden"}>
            <p className="text-red-500">{error}</p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
            <div className="text-center text-md mt-3 text-blue-500 hover:underline">
              <Link to="/login">If you have an account</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
