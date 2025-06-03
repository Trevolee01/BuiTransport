import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import JJImage from "../../../assets/JJ.jpeg";
import StarRating from "./Ratings";
import GAImage from "../../../assets/GA.jpeg";
import AAImage from "../../../assets/AA.jpeg";
import SKImage from "../../../assets/SK.jpeg";

const Transport = () => {
  const [firstDriverRating, setFirstDriverRating] = useState(4.0);
  const [secondDriverRating, setSecondDriverRating] = useState(3.1);
  const [thirdDriverRating, setThirdDriverRating] = useState(3.7);
  const [fourthDriverRating, setFourthDriverRating] = useState(4.7);

  const handleFirstDriverRating = (newRating) => {
    setFirstDriverRating(newRating);
  };

  const handleSecondDriverRating = (newRating) => {
    setSecondDriverRating(newRating);
  };

  const handleThirdDriverRating = (newRating) => {
    setThirdDriverRating(newRating);
  };
  const handleFourthDriverRating = (newRating) => {
    setFourthDriverRating(newRating);
  };

  return (
    <div>
      <header className=" text-white p-4 bg-blue-900 rounded-[10px] block w-full">
        <div className="flex justify-between items-center py-2 px-4">
          <h1 className="text-3xl font-bold text-center">
            Welcome to BUI Transport
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto mt-4 p-4">
        <div className="shadow-md rounded-lg p-6">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Drivers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex b border-gray-700 border rounded-xl shadow-sm overflow-hidden">
                <div className="w-1/3 p-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img
                      src={JJImage}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">John doe</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      active
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                      <b>Silver</b> Toyota Camry
                    </p>
                    <p className="text-sm text-blue-600 font-bold">
                      ABC-F123DE
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <StarRating
                      initialRating={firstDriverRating}
                      onRatingChange={handleFirstDriverRating}
                    />
                    <span className=" text-sm ml-1">(160 Rides)</span>
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer">
                      Book
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex bg--body-bg border-gray-700 border rounded-xl shadow-sm overflow-hidden">
                <div className="w-1/3 p-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img
                      src={SKImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">Jim Smith</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Inactive
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                      <b>Black</b> Honda Pilot
                    </p>
                    <p className="text-sm text-blue-600 font-bold">XYZ-789GH</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <StarRating
                      initialRating={secondDriverRating}
                      onRatingChange={handleSecondDriverRating}
                    />
                    <span className="text-sm ml-1">(98 Rides)</span>
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer !rounded-button">
                      Book
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex bg--body-bg border-gray-600 border rounded-xl shadow-sm overflow-hidden">
                <div className="w-1/3 p-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img
                      src={GAImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">Calvin weah</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Inactive
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                      <b>Grey</b> Kia Rio
                    </p>
                    <p className="text-sm text-blue-600 font-bold">PQR-456LM</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <StarRating
                      initialRating={thirdDriverRating}
                      onRatingChange={handleThirdDriverRating}
                    />
                    <span className="text-sm ml-1">(103 Rides)</span>
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium  hover:bg-blue-700 cursor-pointer !rounded-button">
                      Book
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex bg--body-bg border-gray-700 border rounded-xl shadow-sm overflow-hidden">
                <div className="w-1/3 p-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img
                      src={AAImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">Michael White</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      active
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                      <b>Yellow</b> Volkswagen Beetle
                    </p>
                    <p className="text-sm text-blue-600 font-bold">
                      RRR-SR156OM
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <StarRating
                      initialRating={fourthDriverRating}
                      onRatingChange={handleFourthDriverRating}
                    />
                    <span className="text-sm ml-1">(200 Rides)</span>
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer !rounded-button">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-blue-800 border-gray-200 px-10 py-2 ">
        <div className=" justify-between flex ">
          <a
            href="/Home"
            className="flex flex-col items-center justify-between py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <TiHome />
            </i>
            <span className="text-gray-400 text-xl">Home</span>
          </a>
          <a
            href="/Book"
            className=" flex flex-col items-center py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <FaCar />
            </i>
            <span className="text-gray-400 text-xl">Book a Ride</span>
          </a>
          <a
            href=""
            className=" flex flex-col items-center  py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <IoIosPeople />
            </i>
            <span className="text-gray-400 text-xl">Drivers</span>
          </a>
          <a
            href="/Settings"
            className=" flex flex-col items-center py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <IoSettingsOutline />
            </i>
            <span className="text-gray-400 text-xl">Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Transport;
