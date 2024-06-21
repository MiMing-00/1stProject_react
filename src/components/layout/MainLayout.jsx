import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col max-w-xl bg-blue-200 border-4 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
