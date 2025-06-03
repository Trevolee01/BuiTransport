import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

const AllOrganization = () => {
  const [approvedDrivers, setApprovedDrivers] = useState([]);

  useEffect(() => {
    // Get approved drivers from localStorage
    const drivers = JSON.parse(localStorage.getItem("approvedDrivers") || "[]");
    setApprovedDrivers(drivers);
  }, []);

  const handleRemove = (driverId) => {
    // Create updated drivers array first
    const updatedDrivers = approvedDrivers.filter(d => d.id !== driverId);
    // Update localStorage
    localStorage.setItem("approvedDrivers", JSON.stringify(updatedDrivers));
    // Then update state with the same filtered array
    setApprovedDrivers(updatedDrivers);
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
        <div className="bg--body-bg  border-2 border-gray-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold  mb-6">Admin Dashboard</h2>
            <div className="flex border-b border-gray-200 mb-6">
              <Link to="/AdminHome">
                <button className="py-3 px-6 text-center font-medium text-sm  border-blue-500  cursor-pointer text-gray-500 hover:text-gray-700 ">
                  Pending Approval
                </button>
              </Link>
              <button className="py-3 px-6 text-center font-medium text-sm  text-blue-300  border-b-2 hover:text-blue-700 cursor-pointer">
                All Organizers
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold  mb-4">All Organizers</h3>
            </div>
            <div className="overflow-x-auto bg--body-bg rounded-xl shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg--body-bg">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                    >
                      Organizers
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                    >
                      vehicle no.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg--body-bg divide-gray-200 divide-y">
                  {approvedDrivers.map((driver) => (
                    <tr key={driver.id}>
                      <td className="px-6 py-4  text-sm">
                        <div className="flex items-center">
                          <div className="text-sm font-medium">{driver.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4  text-sm">
                        <div className="text-sm font-medium">{driver.vehicleColor} {driver.vehicle}</div>
                      </td>
                      <td className="px-6 py-4  text-sm">
                        <div className="text-sm font-medium">{driver.plateNumber}</div>
                      </td>
                      <td className="px-6 py-4  text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {driver.status}
                        </span>
                      </td>
                      <td className="px-6 py-4  text-sm">
                        <button 
                          onClick={() => handleRemove(driver.id)}
                          className="text-red-600 hover:text-red-900 cursor-pointer"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default AllOrganization;
