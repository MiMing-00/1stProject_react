import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import AdoptionDetail from "../pages/detail/adoptListDetail/AdoptionDetail";
import ReviewBoardDetail from "../pages/detail/reviewBoardDetail/ReviewBoardDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/adoption/id" element={<AdoptionDetail />} />
          <Route pathe="/review/id" element={<ReviewBoardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
