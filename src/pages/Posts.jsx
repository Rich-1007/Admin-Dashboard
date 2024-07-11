import React, { useState } from "react";
import { users, posts } from "../../public/data";
import { FaUserPlus } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Posts = () => {
  return (
    <div className=" bg-[##EFF3F4] sm:px-16 px-2 py-10 flex flex-col gap-2 sm:gap-10 w-10/12 overflow-hidden">
      <div className=" flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
        <div className="bg-[#879fff] px-6 flex flex-row rounded-lg sm:w-5/12 h-52 justify-center items-center">
          <div className="w-1/6  flex justify-center bg-opacity-40 bg-white h-12  rounded-lg items-center">
            <FaUserPlus color="white" size={30} />
          </div>
          <div className="w-4/6  text-white flex flex-row px-6 justify-around items-center">
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

          <div className="w-4/6  text-white flex flex-col items-start px-6">
            <span className="text-xl">Users active in the last 24 hours</span>
            <span className="text-6xl">20</span>
            <span className="text-[9px] font-thin">Only Online users</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl sm:px-4 px-1 py-6 shadow-lg">
        <div>
          <span>Most recent posts</span>
        </div>

        <div className=" flex flex-row justify-around py-5 text-gray-600 w-full ">








          <div className="flex flex-col sm:gap-2 items-start w-full ">
           
           
           
           
           
           
           
           
            <div className="flex  flex-row justify-between w-full sm:text-base text-[9px]  ">
              <div className="w-2/12 flex justify-center ">
                <span className="my-2 border-b-2 border-gray-500 ">
                  Post id{" "}
                </span>
              </div>

              <div className="w-4/12 flex justify-start">
                <span className="my-2 border-b-2 border-gray-500">
                  {" "}
                  Post Caption
                </span>
              </div>

              <div className="w-4/12 flex justify-start">
                <span className="my-2 border-b-2 border-gray-500">
                  {" "}
                  Post URL
                </span>
              </div>
              <div className="w-1/5 flex justify-start">
                <span className="my-2 border-b-2 border-gray-500"> Action</span>
              </div>
            </div>















            {posts.map((post) => (








              <div
                key={post.post_id}
                className="flex border-b justify-between overflow-hidden  gap-1 flex-row w-full sm:text-sm text-[9px]">
              
                  <div className="flex justify-center  w-2/12 ">
                    <span>{post.post_id}</span>
                  </div>

                  <div className="flex justify-start w-3/12 line-clamp-1">
                    <span>{post.postCaption}</span>
                  </div>

                  <div className="flex justify-start w-4/12   overflow-hidden ">
                    <span>{post.mediaUrl}</span>
                  </div>

                  <div className="flex sm:flex-row flex-col justify-around sm:gap-2 w-3/12">
                    <button className="bg-red-600 text-white px-1 rounded-sm hover:bg-red-800 transition-all duration-300 ">
                      Delete
                    </button>
                    <button className="bg-green-400 sm:px-3 px-1 text-white rounded-sm hover:bg-green-600 transition-all duration-300">
                      Hide
                    </button>
                  </div>
                
              </div>












            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
