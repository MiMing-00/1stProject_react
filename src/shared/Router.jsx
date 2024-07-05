import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import AdoptionDetail from "../pages/detail/adoptListDetail/AdoptionDetail";
import ReviewBoardDetail from "../pages/detail/reviewBoardDetail/ReviewBoardDetail";
import Main from "../pages/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          {/* TODO 임시 설정 */}
          <Route path="/adoption/:id" element={<AdoptionDetail />} />
          <Route pathe="/review" element={<ReviewBoardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
