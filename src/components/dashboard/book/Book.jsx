import React from "react";
import { TiHome } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Book = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <header className=" text-black p-4 bg-blue-900 rounded-[10px] block w-full">
        <div className="flex justify-between items-center py-2 px-4">
          <h1 className="text-3xl font-bold text-center">
            Welcome to BUI Transport
          </h1>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 text-xs font-medium rounded-full bg-purple-300 text-purple-800 cursor-pointer">
              Admin
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-15 py-13">
        <div className="bg--body-bg rounded-xl overflow-hidden p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Book a ride</h2>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label type="datetime-local">Date</label>
                <div className="w-full py-2 border-0 bg-gray-400">
                  
                  {currentDate.toLocaleString()}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium  mb-1">
                  Time
                </label>
                <div className="w-full py-2 border-0 bg-gray-400">
                  {currentTime.toLocaleString()}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <label>Drop-off Location</label>
                <input
                  type="text"
                  placeholder="Enter your Destination"
                  className="w-full px-3 py-1 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label>Estimated fee (Naira)</label>
                <input
                  type="text"
                  className="w-full px-3 py-1 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium cursor-pointer">
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 cursor-point"
              >
                Book Ride
              </button>
            </div>
          </form>
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
            href=""
            className=" flex flex-col items-center py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <FaCar />
            </i>
            <span className="text-gray-400 text-xl">Book a Ride</span>
          </a>
          <a
            href="/Transport"
            className=" flex flex-col items-center  py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <IoIosPeople />
            </i>
            <span className="text-gray-400 text-xl">Transport Organizers</span>
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

export default Book;
