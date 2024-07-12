import React, { useState } from "react";
import { users, posts } from "../../public/data";
import { FaUserPlus } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import UserList from "../components/UserList";
import { activeUsers } from "../Utils/helper";
import KPIBox from "../components/KPIBox";



const Users = () => {
  

  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div className=" px-4 py-10 space-y-4  overflow-hidden">
      
        <div className=" flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
        <KPIBox text="Total Users" data={users.length}>
          <FaUserPlus color="white" size={30} />
        </KPIBox>

        <KPIBox
          text="Users active in the last 24 hours"
          data={activeUsers.length}
        >
          <BsFillPersonLinesFill color="white" size={30} />
        </KPIBox>
      </div>

      <div className="shadow-xl bg-gray-200 rounded-xl sm:px-4 px-1 py-6 w-full ">
        <div>
          <span>Most recent Users</span>
        </div>

        <div className="flex flex-row justify-around py-5 text-gray-600 text-xs sm:text-base w-full">
          <div className="flex flex-col gap-2 items-start w-full">
           
           

            <div className="w-full">
              <UserList data={activeUsers} />
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
        </div>
      </div>
    </div>
  );
};

export default Users;
