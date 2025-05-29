import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/googleIcon.svg";
import BetaHouseLogo from "../assets/BH.svg";
import SignUpImage from "../assets/signup-image.svg";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row lg:gap-10 items-center justify-center lg:pt-[50px] lg:pt-28 md:pt-0 pt-8 px-6 lg:px-[130px] md:pb-0 pb-40">
      {/* Sign Up Form */}
      <div className="w-full lg:w-1/2 bg-white h-[846px]">
        <h1 className="text-[25px] font-bold text-black mb-4">
          Join our community of home seekers and explore the possibilities that
          await.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Let’s get started by filling out the information below.
        </p>
        <form className="space-y-6">
          {/* First Name and Last Name */}
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            {/* First Name */}
            <div className="w-full">
              <label className="block text-black text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
              />
            </div>
            {/* Last Name */}
            <div className="w-full">
              <label className="block text-black text-sm font-medium mb-2  lg:mt-0 mt-4">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
          </div>
          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#3D9970] border-gray-300 rounded focus:ring-[#3D9970]"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to Terms of Service and Privacy Policies
            </label>
          </div>
          {/* Sign Up Button */}
          <button className="w-full bg-[#3D9970] text-white py-3 rounded-md hover:bg-[#2E7A5C] transition">
            Sign Up
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
        {/* Already Have an Account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#3D9970] font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block  relative">
        {/* BetaHouse Logo */}
        <div className="absolute top-35 left-4  p-2  flex items-center">
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

export default SignUp;
