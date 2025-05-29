import React, { useState } from "react";
import plusCounter from "../assets/plusCountBtn.svg";
import minusCounter from "../assets/minusCountBtn.svg";
import DropDown from "../utils/DropDown.jsx";

const Hero = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedroomCount, setBedroomCount] = useState(0);

  const incrementBedroom = () => setBedroomCount(bedroomCount + 1);
  const decrementBedroom = () =>
    setBedroomCount(bedroomCount > 0 ? bedroomCount - 1 : 0);

  const handleFindProperties = () => {
    onSearch({ location, propertyType, bedroomCount });
  };

  return (
    <>
      <main className="mb-30">
        <div className="text-[#FFFFFF] flex flex-col items-center font-Outfit">
          <div className="text-center w-fit">
            <h1 className="md:text-5xl 2xl:text-7xl lg:text-6xl tracking-[2px] leading-[100%] sm:tracking-0 sm:leading-0 text-3xl font-bold md:py-20 py-10">
              Browse Our Properties
            </h1>
            <p className="md:text-2xl font-light leading-[160%] w-[80%] mx-auto">
              Find your perfect home among our curated properties. Start
              browsing now!
            </p>
          </div>
        </div>
        <section className="bg-[#FFFFFF33] lg:py-10 md:py-8 mt-18 rounded-md 2xl:max-w-[1400px] lg:max-w-[1188px] md:max-w-[760px] mx-auto hidden md:block">
          <div className="2xl:max-w-[1300px] lg:max-w-[1100px] md:max-w-[680px] mx-auto flex flex-col md:flex-row justify-between items-center lg:px-30 md:px-4 bg-[#FFFFFF] py-6 rounded-md font-Outfit">
            <div className="">
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
                "Owerri",
                "Enugu",
                ]}
                onChange={(value) => setLocation(value)}
              />
            </div>
            <div>
              <DropDown
                title="PROPERTY TYPE"
                placeholder="Select Property Type"
                items={["Duplex", "Bedroom Flat", "Bungalow"]}
                onChange={(value) => setPropertyType(value)}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium cursor-pointer hover:text-[#3D9970]">
                BEDROOM
              </h3>
              <div className="flex items-center justify-between w-[80px]">
                <img
                  src={plusCounter}
                  alt="plusCounter"
                  className="cursor-pointer"
                  onClick={incrementBedroom}
                />
                <p>{bedroomCount}</p>
                <img
                  src={minusCounter}
                  alt="minusCounter"
                  className="cursor-pointer"
                  onClick={decrementBedroom}
                />
              </div>
            </div>
            <button
              className="bg-[#3D9970] text-white px-6 py-4 rounded-md cursor-pointer hover:text-black"
              onClick={handleFindProperties}
            >
              Find Properties
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;