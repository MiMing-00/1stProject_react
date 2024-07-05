import DailySilder from "./components/dailySilder/DailySilder";
import ReviewBoard from "./components/reviewBoard/ReviewBoard";
import AdoptList from "./components/adoptList/AdoptList";
import HomeTime from "./components/homeTime/HomeTime";

const Home = () => {
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
