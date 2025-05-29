import React, { useState } from "react";
import arrowUp from "../assets/chevron-up.svg";
import arrowDown from "../assets/chevron-down.svg";

const DropDown = ({ title, items, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown
  const [selectedItem, setSelectedItem] = useState(""); // State for selected item

  const handleSelect = (item) => {
    setSelectedItem(item); // Update the selected item
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="dropdown">
      {/* Dropdown Title (Clickable) */}
      <div
        className="flex items-center justify-between cursor-pointer hover:text-[#3D9970]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="Toggle Dropdown"
          className="w-5 h-5 ml-2"
        />
      </div>

      {/* Placeholder Text */}
      <span className="text-[#787878] block mt-1 font-Outfit">
        {selectedItem || placeholder}
      </span>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="mt-2 bg-[#3D9970] rounded-md shadow-md w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 hover:text-[#3D9970] cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;