import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-svh flex ">
      <Navbar />
      <div className="flex-grow md:ml-52 border py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
