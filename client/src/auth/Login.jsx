import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/googleIcon.svg";
import BetaHouseLogo from "../assets/BH.svg";
import SignUpImage from "../assets/signup-image.svg";

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row lg:gap-10 items-center justify-center  px-6 lg:px-[130px] ">
      <div className="lg:w-1/2 w-full px-6">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          Welcome back to BetaHouse
        </h1>
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
          </div>
          {/* Remember me || Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#3D9970] border-gray-300 rounded focus:ring-[#3D9970]"
              />
              <label className="ml-2 text-sm text-gray-600">Remember Me</label>
            </div>
            <div>
              <p className="">
                <Link
                  to="/forgot-password"
                  className="text-[#EC5E5E] font-light hover:underline"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
          </div>
          {/* Sign In Button */}
          <button className="w-full bg-[#3D9970] text-white py-2 rounded-md hover:bg-[#2E7A5C] cursor-pointer transition">
            Sign In
          </button>
        </form>
        {/* or Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600 lowercase">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* Continue with Google */}
        <button className="w-full bg-white text-black py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition flex items-center justify-center space-x-2">
          <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        {/* Don't Have an Account */}
        <p className="text-center text-gray-600 mt-4">
          New User?{" "}
          <Link
            to="/signup"
            className="text-[#3D9970] font-light hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
      {/* Image Section */}
      <div className="hidden lg:block  relative w-1/2">
        {/* BetaHouse Logo */}
        <div className="absolute 2xl:top-35 2xl:left-4 lg:top-55 lg:left-4 p-2  flex items-center">
          <img
            src={BetaHouseLogo}
            alt="BetaHouse Logo"
            className="w-10 bg-[#3D9970] rounded-full  p-2  shadow-md flex items-center h-10"
          />
          <span className="ml-2 text-white font-bold text-lg">BetaHouse</span>
        </div>
        <img
          src={SignUpImage}
          alt="Sign Up"
          className="w-[779px] h-[1028px]  "
        />
      </div>
    </div>
  );
};

export default Login;
