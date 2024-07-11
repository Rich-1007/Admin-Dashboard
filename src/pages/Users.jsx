import React, { useState } from "react";
import { users, posts } from "../../public/data";
import { FaUserPlus } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import UserList from "../components/UserList";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="bg-[##EFF3F4] sm:px-16 px-2 py-10 flex flex-col sm:gap-10 gap-4 w-10/12 overflow-hidden">
      <div className=" flex flex-col gap-4 sm:flex-row justify-between ">
        <div className="bg-[#879fff] px-6 flex flex-row rounded-lg sm:w-5/12 h-52 justify-center items-center">
          <div className="w-1/6  flex justify-center bg-opacity-40 bg-white h-12  rounded-lg items-center">
            <FaUserPlus color="white" size={30} />
          </div>
          <div className="w-5/6  text-white flex flex-row px-6 justify-around items-center">
            <span className="text-3xl">Total Users</span>
            <div className="flex flex-col">
              <span className="text-6xl">20</span>
              <span className="text-[9px] font-thin">
                All Offline and Online
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#879fff] px-6 flex flex-row rounded-lg sm:w-5/12 h-52 justify-center items-center">
          <div className="w-1/6  flex justify-center bg-opacity-40 bg-white h-12  rounded-lg items-center">
            <BsFillPersonLinesFill color="white" size={30} />
          </div>

          <div className="w-5/6  text-white flex flex-col items-start px-6">
            <span className="text-xl">Users active in the last 24 hours</span>
            <span className="text-6xl">20</span>
            <span className="text-[9px] font-thin">Only Online users</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl sm:px-4 px-1 py-6 w-full ">
        <div>
          <span>Most recent posts</span>
        </div>

        <div className="flex flex-row justify-around py-5 text-gray-600 text-xs sm:text-base w-full">
          <div className="flex flex-col gap-2 items-start w-full">
          
          
          
          
          
          
          
          
          
          
          
          
          
          
           <div className="px-1 flex flex-row outline justify-end w-full font-semibold text-[9px] sm:text-base">
              <div className="sm:w-1/12 flex  ">
                <span className="my-2 border-b-2 border-gray-500 ">
                  Post id{" "}
                </span>
              </div>

              <div className="w-3/12 flex justify-start">
                <span className="my-2 border-b-2 border-gray-500">
                  {" "}
                  Post Caption
                </span>
              </div>

              <div className="w-2/12 flex justify-start">
                <span className="my-2 border-b-2 border-gray-500">
                  {" "}
                  Post URL
                </span>
              </div>

              <div className="w-3/12 flex justify-start">
                <span className="my-2 border-b-2 border-gray-500"> Email</span>
              </div>

              <div className="w-2/12 flex justify-start">
                <span className="my-2 border-b-2 border-gray-500"> Action</span>
              </div>
            </div>

            <div className="w-full">
              <UserList />
            </div>
          </div>
        </div>

        <div className="text-xl text-gray-800 font-light flex flex-row gap-3">
          Pages :
          <button
            onClick={() => {
              searchParams.set("page", "1");
              setSearchParams(searchParams);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              searchParams.set("page", "2");
              setSearchParams(searchParams);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              searchParams.set("page", "3");
              setSearchParams(searchParams);
            }}
          >
            3
          </button>
          <button
          
            onClick={() => {
              searchParams.set("page", "4");
              setSearchParams(searchParams);
            }}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
