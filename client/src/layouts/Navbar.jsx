import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mobileMenu from "../assets/menuMobile2.svg";
import authIcon from "../assets/authIcon2.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the main menu
  const [isAuthOpen, setIsAuthOpen] = useState(false); // State for the auth menu
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <>
      <header className="bg-[#1D293F1F] w-full h-[121px] flex justify-between items-center px-6 lg:px-20">
        {/* Left Section */}
        <div className="flex items-center font-Poppins">
          <h1
            className="bg-[#3D9970] rounded-full text-white font-bold p-2 text-2xl cursor-pointer"
            onClick={() => (window.location.href = "/")} // Navigate to home
          >
            BH
          </h1>
          <h1
            className="ml-2 text-2xl text-[#FEFEFF] font-medium tracking-wide cursor-pointer"
            onClick={() => (window.location.href = "/")} // Navigate to home
          >
            BetaHouse
          </h1>
        </div>

        {/* Middle Section (Desktop Menu) */}
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <ul className="flex space-x-8 font-Exo2 text-lg text-[#F5F5F5]">
            <li
              className="cursor-pointer hover:text-[#3D9970]"
              onClick={() => navigate("/")} // Navigate to home
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-[#3D9970]"
              onClick={() => navigate("/properties")} // Navigate to properties
            >
              Properties
            </li>
            <li className="cursor-pointer hover:text-[#3D9970]">About Us</li>
            <li className="cursor-pointer hover:text-[#3D9970]">Blog</li>
            <li className="cursor-pointer hover:text-[#3D9970]">Contact Us</li>
          </ul>
        </div>

        {/* Right Section (Desktop Auth Buttons) */}
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-6">
            <li
              className="cursor-pointer hover:text-[#3D9970] px-6 py-2 border-[2px] border-[#F5F5F5] rounded-md text-[#F5F5F5]"
              onClick={() => navigate("/signup")} // Navigate to signup
            >
              Sign Up
            </li>
            <li
              className="cursor-pointer hover:text-black bg-[#3D9970] border-[#3D9970] border-[2px] px-8 py-2 rounded-md text-white"
              onClick={() => navigate("/login")} // Navigate to login
            >
              Login
            </li>
          </ul>
        </div>

        {/* Mobile and Tablet Menu Buttons */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* Auth Icon */}
          <button onClick={() => setIsAuthOpen(!isAuthOpen)}>
            <img src={authIcon} alt="Auth Icon" className="w-8 h-8" />
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={mobileMenu} alt="Mobile Menu" className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile and Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1D293F] text-[#F5F5F5] font-Exo2 text-lg flex justify-center">
          <ul className="flex flex-col space-y-4 p-4">
            <li
              className="cursor-pointer hover:text-[#3D9970]"
              onClick={() => (window.location.href = "/")} // Navigate to home
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-[#3D9970]"
              onClick={() => navigate("/properties")} // Navigate to properties
            >
              Properties
            </li>
            <li className="cursor-pointer hover:text-[#3D9970]">About Us</li>
            <li className="cursor-pointer hover:text-[#3D9970]">Blog</li>
            <li className="cursor-pointer hover:text-[#3D9970]">Contact Us</li>
          </ul>
        </div>
      )}

      {/* Mobile and Tablet Auth Dropdown */}
      {isAuthOpen && (
        <div className="lg:hidden bg-[#1D293F] text-[#F5F5F5] font-Exo2 text-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li
              className="cursor-pointer hover:text-[#3D9970] px-4 py-2 border-[2px] border-[#F5F5F5] rounded-md"
              onClick={() => navigate("/signup")} // Navigate to signup
            >
              Sign Up
            </li>
            <li
              className="cursor-pointer hover:text-white bg-[#3D9970] px-4 py-2 rounded-md"
              onClick={() => navigate("/login")} // Navigate to login
            >
              Login
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
