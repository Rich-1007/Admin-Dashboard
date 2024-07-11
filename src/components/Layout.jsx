import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-svh flex ">
      <Navbar />
      <div className="flex-grow ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
