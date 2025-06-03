import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

const TransHome = () => {
  const [bookings, setBookings] = useState([]);
  const [transportOptions, setTransportOptions] = useState([]);

  useEffect(() => {
    // Load bookings from localStorage
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(savedBookings);

    // Load transport options from localStorage
    const savedOptions = JSON.parse(localStorage.getItem('transportOptions') || '[]');
    setTransportOptions(savedOptions);
  }, []);

  const handleStatusChange = (bookingId, newStatus) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const addTransportOption = (option) => {
    const newOptions = [...transportOptions, { ...option, id: Date.now() }];
    setTransportOptions(newOptions);
    localStorage.setItem('transportOptions', JSON.stringify(newOptions));
  };

  return (
    <div>
      <header className="text-white p-4 bg-blue-900 rounded-[10px] block w-full">
        <div className="flex justify-between items-center py-2 px-4">
          <h1 className="text-3xl font-bold text-center">
            Welcome to BUI Transport
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Transport Management</h2>
            
            {/* Bookings Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Current Bookings</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{booking.customerName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {booking.pickup} → {booking.dropoff}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={booking.status}
                            onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Transport Options Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Transport Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {transportOptions.map((option) => (
                  <div key={option.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold">{option.vehicleType}</h4>
                    <p className="text-sm text-gray-600">Capacity: {option.capacity} passengers</p>
                    <p className="text-sm text-gray-600">Rate: ₦{option.rate}/km</p>
                  </div>
                ))}
              </div>
              
              {/* Add New Transport Option Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  addTransportOption({
                    vehicleType: formData.get('vehicleType'),
                    capacity: formData.get('capacity'),
                    rate: formData.get('rate')
                  });
                  e.target.reset();
                }}
                className="mt-6 space-y-4 max-w-lg"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                  <input
                    type="text"
                    name="vehicleType"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Capacity</label>
                  <input
                    type="number"
                    name="capacity"
                    required
                    min="1"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rate (₦/km)</label>
                  <input
                    type="number"
                    name="rate"
                    required
                    min="0"
                    step="0.01"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add Transport Option
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-blue-800 border-gray-200 px-10 py-2">
        <div className="justify-between flex">
          <a
            href=""
            className="flex flex-col items-center justify-between py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <SlPeople />
            </i>
            <span className="text-gray-400 text-xl">Transport Organizers</span>
          </a>
          <a
            href="/TransSettings"
            className="flex flex-col items-center py-3 px-3 cursor-pointer"
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

export default TransHome;