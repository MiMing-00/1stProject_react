import Header from "../common/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen border-4 mx-auto max-w-screen-2xl w-[80%]">
      <Header />
      <div className="mt-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
