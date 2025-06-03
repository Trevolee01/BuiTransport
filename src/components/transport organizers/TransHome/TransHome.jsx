import React from "react";
import { Link } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
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
          
        </div>
      </main>
      <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-blue-800 border-gray-200 px-10 py-2 ">
        <div className=" justify-between flex ">
          <a
            href=""
            className="flex flex-col items-center justify-between py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              < SlPeople/>
            </i>
            <span className="text-gray-400 text-xl">Transport Organizers</span>
          </a>
          <a
            href="/TransSettings"
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
