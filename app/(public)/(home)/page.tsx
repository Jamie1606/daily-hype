import Image from "next/image";
import BannerButton from "./banner-button";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex bg-slate-100/20 px-20 py-8 justify-center items-center">
        <div className="flex flex-col mr-12">
          <label className="text-4xl mb-9 font-semibold">Elevate Your Style</label>
          <label className="max-w-[500px] mb-8">Designed for the modern trendsetter, our pieces blend sophistication, comfort, and exclusivity. Step into a world where fashion is more than just clothing — it's a statement. Discover our latest arrivals and redefine your wardrobe today.</label>
          <BannerButton />
        </div>
        <div className="ms-12 flex">
          <Image src="/sign-in-bg.webp" className="rounded-xl" alt="Home Page Banner" width={400} height={300} />
        </div>
      </div>
      <div className="mt-20 flex flex-col w-full justify-center">
        <h1 className="text-center text-brand text-3xl font-semibold">Latest Arrivals</h1>
        <div className="flex w-full mt-8 max-w-[1400px] justify-center flex-wrap gap-y-4 gap-x-4 mx-auto">
          <div className="w-80 h-96 bg-black rounded-lg"></div>
          <div className="w-80 h-96 bg-black rounded-lg"></div>
          <div className="w-80 h-96 bg-black rounded-lg"></div>
          <div className="w-80 h-96 bg-black rounded-lg"></div>
          <div className="w-80 h-96 bg-black rounded-lg"></div>
          <div className="w-80 h-96 bg-black rounded-lg"></div>
          <div className="w-80 h-96 bg-black rounded-lg"></div>
          <div className="w-80 h-96 bg-black rounded-lg"></div>
        </div>
        <Button className="w-36 mx-auto mt-5" variant="primary">
          View More
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
