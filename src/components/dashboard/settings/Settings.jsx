import React from 'react'
import { TiHome } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Settings = () => {
  return (
    <div>
      <header className=" text-black p-4 bg-white rounded-[10px] block w-full">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Welcome to BUI Transport
          </h1>
        </div>
      </header>
      <main>
        Hello settings
        </main>
        <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-white border-gray-200 px-10 py-2 ">
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
                          href="/Transport"
                          className=" flex flex-col items-center  py-3 px-3 cursor-pointer"
                        >
                          <i className="text-gray-400 text-xl">
                            <IoIosPeople />
                          </i>
                          <span className="text-gray-400 text-xl">Transport Organizers</span>
                        </a>
                        <a
                          href=""
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
  )
}

export default Settings
