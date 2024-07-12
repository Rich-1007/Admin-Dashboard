import React from "react";
import { FaUsers } from "react-icons/fa";

import { users, posts } from "../../public/data";
import { activePosts, activeUsers } from "../Utils/helper";
import KPIBox from "../components/KPIBox";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className=" space-y-2 sm:space-y-5 py-4 px-4 mx-auto">
      <div className=" flex flex-col sm:flex-row justify-between gap-2 sm:gap-5">
        <KPIBox text="Total users" data={users?.length}>
          <FaUsers />
        </KPIBox>
        <KPIBox text="Total Posts" data={posts?.length}>
          <BsFillPersonLinesFill />
        </KPIBox>
      </div>

      <div className=" flex flex-col sm:flex-row justify-between gap-2 sm:gap-5">
        <KPIBox text="Active users (in last 24 hrs)" data={activeUsers?.length}>
          <FaUsers />
        </KPIBox>
        <KPIBox text="Total Posts" data={activePosts?.length}>
          <BsFillPersonLinesFill />
        </KPIBox>
      </div>
    </div>
  );
};

export default Home;
