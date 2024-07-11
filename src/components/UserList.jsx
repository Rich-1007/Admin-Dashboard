import React, { useEffect, useState } from "react";
import { users } from "../../public/data";
import { useSearchParams } from "react-router-dom";

const UserList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState("1");

  useEffect(() => {
    setPageNum(searchParams.get("page") || "1");

    // setPageSize(searchParams.get("limit") || "10");
  }, [searchParams]);
  return (
    <div className="w-full  flex flex-col justify-around overflow-hidden">
      {users.slice((+pageNum - 1) * 10, +pageNum * 10).map((item) => (
       
       
       
       
       
       
       
       
       <div
          key={item.userID}
          className="border-b text-xs  flex flex-row justify-between sm:text-sm border-2 w-full">
          <div className="flex flex-row w-full gap-1 overflow-hidden  sm:text-base text-[10px]">
           
           
           
           
           
           
           
            <div className="flex justify-center w-1.5/12  ">
              <span>{item.userID}</span>
            </div>

            <div className="flex justify-start w-2/12">
              <span>{item.userName}</span>
            </div>

            <div className="flex justify-start w-3/12 ">
              <span>{item.name}</span>
            </div>
            <div className="flex justify-start w-3/12 overflow-hidden">
              <span>{item.email}</span>
            </div>

            <div className="flex sm:flex-row gap-2 w-1/6 sm:px-2 px-1 overflow-hidden flex-col">
              <button className="bg-red-500 text-white sm:px-2 px-1 rounded-sm hover:bg-red-700 transition-all duration-300 ">
                Ban
              </button>
              <button className="bg-green-400 sm:px-3 px-1 text-white rounded-sm hover:bg-green-600 transition-all duration-300">
                Edit
              </button>
            </div>
















          </div>










        </div>
      ))}
    </div>
  );
};

export default UserList;
