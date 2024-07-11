import React from "react";
import { FaUsers, FaRegFileAlt, FaUserClock, FaClock } from "react-icons/fa";

import { users, posts } from "../../public/data";

const Home = () => {
  return (
    <div className="flex flex-wrap gap-4 sm:p-4 justify-around py-8 w-10/12">
      <div className="flex items-center bg-white shadow-md p-4 rounded-lg sm:w-2/5 h-60 ">
        <div className="text-3xl flex flex-row justify-between gap-3 mr-4 text-gray-600 items-center w-full">
          <FaUsers />
          <div className="flex flex-row gap-4 justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-gray-900">{users.length}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-white shadow-md p-4 rounded-lg sm:w-2/5 h-60 ">
        <div className="text-3xl flex flex-row justify-between gap-3 mr-4 text-gray-600 items-center w-full">
          <FaUsers />
          <div className="flex flex-row gap-4 justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Posts</h3>
            <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white shadow-md p-4 rounded-lg sm:w-2/5 h-60">
        <div className="text-3xl flex flex-row justify-between gap-3 mr-4 text-gray-600 items-center w-full">
          <FaUsers />
          <div className="flex flex-row gap-4 justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Users active
            </h3>
            <p className="text-2xl font-bold text-gray-900">72</p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white shadow-md p-4 rounded-lg sm:w-2/5 h-60">
        <div className="text-3xl flex flex-row justify-between gap-3 mr-4 text-gray-600 items-center w-full">
          <FaUsers />
          <div className="flex flex-row gap-4 justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              last 24 hours.
            </h3>
            <p className="text-2xl font-bold text-gray-900">72</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
