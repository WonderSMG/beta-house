import React, { useState, useEffect } from "react";
import filterIcon from "../assets/filterIcon.svg";
import arrowDown from "../assets/chevron-down.svg";
import DropDown from "../utils/DropDown.jsx";
import { propertiesData } from "../db.js";
import leftNavBtn from "../assets/leftNavBtn.svg";
import rightNavBtn from "../assets/rightNavBtn.svg";

const Properties = ({ searchCriteria }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle filter visibility
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const propertiesPerPage = 9; // Number of properties to display per page
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  // Filter properties based on search criteria
  useEffect(() => {
    if (searchCriteria) {
      const { location, propertyType, bedroomCount } = searchCriteria;
      const filtered = propertiesData.filter((property) => {
        const matchesLocation =
          location === "" || property.location === location;
        const matchesPropertyType =
          propertyType === "" || property.title.includes(propertyType);
        const matchesBedroomCount =
          bedroomCount === 0 || property.room.includes(`${bedroomCount} Bed`);
        return matchesLocation && matchesPropertyType && matchesBedroomCount;
      });
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(propertiesData);
    }
  }, [searchCriteria]);

  // Calculate the properties to display based on the current page
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <main className="w-full lg:px-20 md:px-10 px-4 font-Poppins">
      {/* Filters and Sorting Section */}
      <section className="flex justify-between items-center mt-10 font-Outfit font-normal">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Filter Icon and Text */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <img
              className="w-[18.9px] h-[18.9px]"
              src={filterIcon}
              alt="filterIcon"
            />
            <p className="hidden md:block font-medium">More Filter</p>
            <p className="block md:hidden font-medium">Filter</p>
          </div>
          {/* Results Count */}
          <p className="hidden md:block">
            Showing {currentProperties.length} of {filteredProperties.length}{" "}
            results
          </p>
          <p className="block md:hidden">Showing {currentProperties.length}</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <p className="text-gray-500 font-medium">Sort by:</p>
          <div className="flex items-center space-x-1 cursor-pointer">
            <p className="text-gray-700 font-medium">Default</p>
            <img
              className="w-[16px] h-[12px]"
              src={arrowDown}
              alt="arrowDown"
            />
          </div>
        </div>
      </section>

      {/* Filter Section (Visible on Mobile When Filter is Clicked) */}
      {isFilterOpen && (
        <section className="bg-[#FFFFFF] p-4 rounded-md mt-4 md:hidden">
          <div className="flex flex-col space-y-4">
            {/* Location Dropdown */}
            <DropDown
              title="LOCATION"
              placeholder="Select Location"
              items={[
                "Agege",
                "Ajeromi-Ifelodun",
                "Alimosho",
                "Amuwo Odofin",
                "Apapa",
                "Badagry",
                "Epe",
                "Eti-Osa",
                "Ibeju Lekki",
                "Ikeja",
                "Ikorodu",
                "Lagos Island",
                "Lagos Mainland",
                "Mushin",
                "Ojo",
                "Shomolu",
                "Surulere",
                "Ajah",
                "Ikoyi",
              ]}
            />

            {/* Property Type Dropdown */}
            <DropDown
              title="PROPERTY TYPE"
              placeholder="Select Property Type"
              items={["Duplex", "Bedroom Flat", "Bungalow"]}
            />

            {/* Bedroom Section */}
            <div>
              <h3 className="text-lg font-medium">BEDROOM</h3>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="bg-[#3D9970] text-white px-4 py-2 rounded-md"
                  onClick={() => console.log("Increment Bedroom")}
                >
                  +
                </button>
                <p className="text-gray-700">0</p>
                <button
                  className="bg-[#3D9970] text-white px-4 py-2 rounded-md"
                  onClick={() => console.log("Decrement Bedroom")}
                >
                  -
                </button>
              </div>
            </div>

            {/* Find Properties Button */}
            <button className="bg-[#3D9970] text-white px-6 py-4 rounded-md">
              Find Properties
            </button>
          </div>
        </section>
      )}

      {/* Properties List Section */}
      <section className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <div
            key={property._id}
            className="bg-white shadow-md rounded-md overflow-hidden relative"
          >
            {/* Featured Badge */}
            <div className="absolute top-3 left-3 bg-[#3D9970] text-white text-xs font-normal font-Outfit px-6 py-3 rounded-sm z-10">
              Featured
            </div>
            {/* For Rent/For Sale Badge */}
            <div className="absolute top-3 right-3 bg-[#D3D3D3B2] text-white text-xs font-normal font-Outfit px-6 py-3 rounded-sm z-10">
              {property.forRent ? "For Rent" : "For Sale"}
            </div>
            <div className="relative">
              {/* Property Image */}
              <img
                src={property.Image}
                alt={property.title}
                className="w-full h-[300px] object-cover"
              />
              {/* Icons at the Bottom Right */}
              <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                {/* Link Icon Button */}
                <div className="bg-[#878787B2] p-2 rounded-md">
                  <img
                    src={property.linkIcon}
                    alt="Link Icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>

                {/* Video Icon Button */}
                <div className="bg-[#878787B2] p-2 rounded-md">
                  <img
                    src={property.videoIcon}
                    alt="Video Icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>

                {/* Image Icon Button */}
                <div className="bg-[#878787B2] p-2 rounded-md">
                  <img
                    src={property.imageIcon}
                    alt="Image Icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Property Details */}
            <div className="p-10">
              <h3 className="text-lg font-medium text-gray-800">
                {property.title}
              </h3>
              <div className="flex gap-3 mt-2">
                <img src={property.locationIcon} alt="Location Icon" />
                <p className="text-sm text-gray-500">{property.location}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <img src={property.bedIcon} alt="Bed Icon" />
                  <p className="text-sm text-gray-600">{property.room}</p>
                </div>
                <div className="flex gap-2">
                  <img src={property.bathIcon} alt="Bath Icon" />
                  <p className="text-sm text-gray-600">{property.bathroom}</p>
                </div>
              </div>
            </div>

            {/* Property Icons */}
            <div className="flex items-center justify-between px-4 py-6 border-t border-gray-200 w-[90%] mx-auto">
              <p className="text-lg font-medium mt-2 font-Outfit">
                ₦ {property.Price}
              </p>
              <img
                src={property.SyncIcon}
                alt="Sync Icon"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={property.ShareIcon}
                alt="Share Icon"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={property.heartIcon}
                alt="Heart Icon"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Pagination Section */}
      <section className="flex justify-center space-x-2 mt-6">
        {/* Left Navigation Button */}
        <button
          className={`p-2 rounded-md ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={leftNavBtn} alt="Previous Page" className="w-6 h-6" />
        </button>

        {/* Pagination Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-[#3D9970] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Right Navigation Button */}
        <button
          className={`p-2 rounded-md ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          <img src={rightNavBtn} alt="Next Page" className="w-6 h-6" />
        </button>
      </section>
    </main>
  );
};

export default Properties;
