import React from "react";
import { TiHome } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Book = () => {
  return (
    <div>
      <header className=" text-black p-4 bg-white rounded-[10px] block w-full">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Welcome to BUI Transport
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-15 py-13">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book a ride</h2>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="w-full py-2 border-0 bg-gray-100 text-gray-900"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <div className="w-full py-2 border-0 bg-gray-100 text-gray-900"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-2 py-1 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg "
                />
              </div>
              <div>
                <label>Drop-off Location</label>
                <input
                  type="text"
                  placeholder="Enter your Destination"
                  className="w-full px-3 py-1 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg"
                />
              </div>
              <div>
                <label>Estimated fee (Naira)</label>
                <input
                  type="text"
                  className="w-full px-3 py-1 border border-gray-300 text-gray-900 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium cursor-pointer">Cancel</button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 cursor-point"
              >
                Book Ride
              </button>
            </div>
          </form>
        </div>
      </main>
      <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-white border-gray-200 px-10 py-2 ">
        <div className=" justify-between flex ">
          <a
            href="Login/Home"
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
