import React from "react";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


const Home = () => {
  return (
    <div>
      <header className=" text-white p-4 bg-blue-900 rounded-[10px] block w-full">
        <div className="flex justify-between items-center py-2 px-4">
          <h1 className="text-3xl font-bold text-center">
            Welcome to BUI Transport
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-15 py-13">
        <div className="bg--body-bg rounded-xl overflow-hidden">
          <div className=" flex  ">
            <button className="flex-1 py-4 px-6 text-center font-bold text-sm border-b-2 border-b-blue-700 text-blue-700 cursor-pointer ">
              Active Booking
            </button>
           <Link to ='/PastBooking'><button className="flex-1 py-4 text-left font-bold text-sm  text-gray-500 hover:text-gray-700 cursor-pointer ">
              Past Booking
            </button></Link>
          </div>
          <div className="p-4">
            <div className="space-y-6"></div>
            <div className="text-center py-20 flex flex-col items-center">
              <i className=" text-gray-400 items-center text-5xl mb-4">
                <FaCalendarAlt />
              </i>
              <p className=" text-lg font-medium">
                No active bookings at the moment.
              </p>
             <Link to ='/Book'><button className="bg-blue-500 font-bold px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-200">
                Book a Ride
              </button></Link>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-blue-800 border-gray-200 px-10 py-2 ">
        <div className=" justify-between flex ">
          <a
            href=""
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

export default Home;
