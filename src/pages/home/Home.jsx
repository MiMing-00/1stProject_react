import DailySilder from "./components/dailySilder/DailySilder";
import ReviewBoard from "./components/reviewBoard/ReviewBoard";
import AdoptList from "./components/adoptList/AdoptList";
import HomeTime from "./components/homeTime/HomeTime";
import { getAbandonmentData } from "../../api/PetApi";

const Home = () => {
  getAbandonmentData().then((data) => console.log(data));
  return (
    <>
      <DailySilder />
      <AdoptList />
      <ReviewBoard />
      <HomeTime />
    </>
  );
};

export default Home;
