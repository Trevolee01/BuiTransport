import React, { useState, useEffect } from "react";
import Switch from "../../dashboard/settings/switch/Switch";
import { IoSettingsOutline } from "react-icons/io5";
import {getUserData,updateUserData,saveUserPhoto,removePhoto,} from "../../service/userService";
import { toast } from "react-toastify";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { Await, Link } from "react-router-dom";

const AdminSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    language: "english",
    photoUrl: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setFormData((prevData) => ({
        ...prevData,
        ...userData,
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsLoading(true);
      const result = await saveUserPhoto(file);
      if (result.success) {
        setFormData((prevData) => ({
          ...prevData,
          photoUrl: result.photoUrl,
        }));
        toast.success("Photo updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update photo. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemovePhoto = async () => {
    try {
      setIsLoading(true);
      const result = await removePhoto();
      if (result.success) {
        setFormData((prevData) => ({
          ...prevData,
          photoUrl: null,
        }));
        toast.success("Photo removed successfully!");
      }
    } catch (error) {
      toast.error("Failed to remove photo. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await updateUserData(formData);
      if (result.success) {
        toast.success("Settings updated successfully!");
      } else {
        toast.error("Failed to update settings. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg rounded-xl overflow-hidden p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Account Settings</h2>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                  {formData.photoUrl ? (
                    <img
                      src={formData.photoUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-6xl" />
                  )}
                </div>
                <div className="flex space-x-2">
                  <label className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium cursor-pointer">
                    {isLoading ? "Uploading..." : "Change Photo"}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      disabled={isLoading}
                    />
                  </label>
                  {formData.photoUrl && (
                    <button
                      onClick={handleRemovePhoto}
                      disabled={isLoading}
                      className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? "Removing..." : "Remove Photo"}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Language
                    </label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="english" className="text-black">
                        English
                      </option>
                      <option value="french" className="text-black">
                        French
                      </option>
                      <option value="spanish" className="text-black">
                        Spanish
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Dark Mode</h3>
                    <label>
                      <Switch />
                    </label>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-500 px-4 py-2 border border-blue-300 hover:bg-blue-100 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
                <div className="flex justify-end space-x-4">
                  <Link to={"/"}>
                    <button
                      type="submit"
                      className="bg-red-500 px-4 py-2 border border-red-300 hover:bg-red-100 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto fixed bottom-0 left-0 right-0 bg-blue-800 border-gray-200 px-10 py-2">
        <div className="justify-between flex">
          <a
            href="AdminHome"
            className="flex flex-col items-center justify-between py-3 px-3 cursor-pointer"
          >
            <i className="text-gray-400 text-xl">
              <GrUserAdmin />
            </i>
            <span className="text-gray-400 text-xl">Admin</span>
          </a>
          <a
            href="/AdminSettings"
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

export default AdminSettings;
