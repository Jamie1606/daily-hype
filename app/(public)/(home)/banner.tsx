import Image from "next/image";
import BannerButton from "./banner-button";

export default function Banner() {
  return (
    <div className="flex bg-slate-100/20 px-20 py-8 justify-center items-center">
      <div className="flex flex-col mr-12">
        <label className="text-4xl mb-9 font-semibold">Elevate Your Style</label>
        <label className="max-w-[500px] mb-8 text-justify leading-7 text-[#333]">Designed for the modern trendsetter, our pieces blend sophistication, comfort, and exclusivity. Step into a world where fashion is more than just clothing — it's a statement. Discover our latest arrivals and redefine your wardrobe today.</label>
        <BannerButton />
      </div>
      <div className="ms-12 flex">
        <Image src="/banner.webp" className="rounded-xl" alt="Home Page Banner" width={400} height={300} />
      </div>
    </div>
  );
}
