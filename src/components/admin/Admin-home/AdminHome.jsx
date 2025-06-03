import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SKImage from "../../../assets/SK.jpeg";
import AAImage from "../../../assets/AA.jpeg";
import GAImage from "../../../assets/GA.jpeg";
import { GrUserAdmin } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import JJImage from "../../../assets/JJ.jpeg";

const AdminHome = () => {
  const navigate = useNavigate();
  const [pendingDrivers, setPendingDrivers] = useState([
    {
      id: 1,
      name: "John doe",
      image: JJImage,
      vehicle: "Toyota Camry",
      vehicleColor: "Silver",
      plateNumber: "ABC-F123DE"
    },
    {
      id: 2,
      name: "Jim Smith",
      image: SKImage,
      vehicle: "Honda Pilot",
      vehicleColor: "Black",
      plateNumber: "XYZ-H789KL"
    },
    {
      id: 3,
      name: "Calvin Weah",
      image: GAImage,
      vehicle: "Kia Rio",
      vehicleColor: "Grey",
      plateNumber: "PQR-456LM"
    },
    {
      id: 4,
      name: "Micheal White",
      image: AAImage,
      vehicle: "Volkswagen Beetle",
      vehicleColor: "Yellow",
      plateNumber: "RRR-SR156OM"
    }
  ]);

  const handleAccept = (driver) => {
    // Remove from pending list
    setPendingDrivers(prev => prev.filter(d => d.id !== driver.id));
    
    // Store the approved driver data in localStorage to access in AllOrganization
    const approvedDriver = {
      ...driver,
      status: "Approved"
    };
    const existingDrivers = JSON.parse(localStorage.getItem("approvedDrivers") || "[]");
    localStorage.setItem("approvedDrivers", JSON.stringify([...existingDrivers, approvedDriver]));
    
    // Navigate to AllOrganization
    navigate("/AllOrganization");
  };

  const handleReject = (driverId) => {
    setPendingDrivers(prev => prev.filter(d => d.id !== driverId));
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
      <main className="max-w-7xl mx-auto px-15 py-13">
        <div className="bg--body-bg rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold  mb-6">Admin Dashboard</h2>
            <div className="flex border-b border-gray-200 mb-6">
              <button className="py-3 px-6 text-center font-medium text-sm border-b-2  text-blue-300  hover:text-blue-700 cursor-pointer">Pending Approval</button>
             <Link to="/AllOrganization"> <button className="py-3 px-6 text-center font-medium text-sm text-gray-500 hover:text-gray-700 cursor-pointer ">All Organizers</button></Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Pending Approval </h3>
              <div className="space-y-4">
                {pendingDrivers.map((driver) => (
                  <div key={driver.id} className="flex border-gray-500 border rounded-xl shadow-sm overflow-hidden">
                    <div className="w-1/6 p-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img src={driver.image} alt="Organizer" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <h3 className="text-md font-bold">{driver.name}</h3>
                          <p className="text-sm"><b>{driver.vehicleColor}</b> {driver.vehicle}</p>
                          <p className="text-sm text-blue-600 font-bold">
                            {driver.plateNumber}
                          </p>
                        </div>
                        <div className="flex mt-3 md:mt-0 space-x-3">
                          <button 
                            onClick={() => handleAccept(driver)}
                            className="px-3 py-1 bg-green-600 rounded-lg text-xs font-medium text-white hover:bg-green-700 cursor-pointer whitespace-nowrap !rounded-button"
                          >
                            Accept
                          </button>
                          <button 
                            onClick={() => handleReject(driver.id)}
                            className="px-3 py-1 bg-red-600 rounded-lg text-xs font-medium text-white hover:bg-red-700 cursor-pointer whitespace-nowrap !rounded-button"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-blue-800 border-gray-200 py-2 px-10">
        <div className=" justify-between flex ">
          <a
            href="AdminHome"
            className=" flex flex-col items-center justify-between py-3 px-3 cursor-pointer"
         >
            <i className="text-gray-400 text-xl">
              <GrUserAdmin />
            </i>
            <span className="text-gray-400 text-xl">Admin</span>
          </a>
          <a
            href="AdminSettings"
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

export default AdminHome;
