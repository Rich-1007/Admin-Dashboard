import React from "react";
import { BsFilePost } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" text-white  py-5 px-2 sm:px-8 bg-gray-700 w-2/12">
      <div className="flex justify-center  border-b border-green-400">
        <span className="sm:text-xl font-bold">Navbar</span>
      </div>

      <div className="h-full  flex flex-col justify-around">
        <div className="py-10 flex flex-col gap-5 items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `hover:bg-orange-400 bg-gray-400 p-2 rounded-full transition-all duration-300 hover:cursor-pointer ${
                isActive ? "bg-orange-400 " : ""
              }`
            }
          >
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:text-xl text-sm font-bold sm:px-2">
              <IoHome color="white" size={30} />
              <span>Home</span>
            </div>
          </NavLink>

          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              `hover:bg-orange-400 bg-gray-400 p-2 rounded-full transition-all duration-300  hover:cursor-pointer ${
                isActive ? "bg-orange-400 " : ""
              }`
            }
          >
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4 text-sm sm:text-xl font-bold sm:px-2">
              <FaUserPlus color="white" size={30} />
              <span>Users</span>
            </div>
          </NavLink>

          <NavLink
            to={"/posts"}
            className={({ isActive }) =>
              `hover:bg-orange-400 bg-gray-400 p-2 rounded-full transition-all duration-300  hover:cursor-pointer ${
                isActive ? "bg-orange-400 " : ""
              }`
            }
          >
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:text-xl text-sm font-bold sm:px-2">
              <BsFilePost color="white" size={30} />
              <span>Posts</span>
            </div>
          </NavLink>
        </div>

        <NavLink to={"/loginpage"}>
          <div className="bg-green-400 flex justify-center text-lg py-1 rounded-md ">
            <span>logIn</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
