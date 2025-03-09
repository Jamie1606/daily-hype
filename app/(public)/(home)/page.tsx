import Banner from "./banner";
import LatestArrival from "./latest-arrival";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <LatestArrival />
    </div>
  );
};

export default HomePage;
