import React, { useEffect, useState } from "react";
import { users, posts } from "../../public/data";
import { FaUserPlus } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { activePosts, activeUsers } from "../Utils/helper";
import { useSearchParams } from "react-router-dom";
// import PostList from "../components/PostList";
import KPIBox from "../components/KPIBox";
import DashboardTable from "../components/DashboardTable";

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState("1");
  

  useEffect(() => {
    setPageNum(searchParams.get("page") || "1");
  }, [searchParams]);

  return (
    <div className="px-4 py-10 space-y-4  overflow-hidden">
      <div className=" flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
        <KPIBox text="Total Post" data={posts.length}>
          <FaUserPlus color="white" size={30} />
        </KPIBox>

        <KPIBox
          text="Post published in last 24 hours"
          data={activePosts.length}
        >
          <BsFillPersonLinesFill color="white" size={30} />
        </KPIBox>
      </div>

      <div className="bg-gray-200 rounded-xl sm:px-4 px-1 py-6 shadow-lg">
        <div>
          <span>Most recent posts</span>
        </div>

        <div>
          <DashboardTable data={activePosts} />
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
        </div>
      </div>
    </div>
  );
};

export default Posts;
