import url from "@/constant/url";
import Link from "next/link";
import NavBarRight from "./nav-bar-right";

interface NavBarProps {}

export default function NavBar() {
  return (
    <div className="flex py-5 px-20 items-center">
      <Link className="text-3xl tracking-wider font-bold cursor-pointer" href={url.HOME}>
        DAILYHYPE
      </Link>
      <div className="flex ms-16 text-[15px] text-slate-600 items-center">
        <Link href="" className="hover:text-black hover:underline hover:underline-offset-4 hover:font-semibold min-w-16 transition-all duration-200 ease-in-out">
          Home
        </Link>
        <Link href="" className="hover:text-black hover:underline hover:underline-offset-4 hover:font-semibold min-w-[4.5rem] transition-all duration-200 ease-in-out">
          Explore
        </Link>
        <Link href="" className="hover:text-black hover:underline hover:underline-offset-4 hover:font-semibold min-w-[3.4rem] transition-all duration-200 ease-in-out">
          Man
        </Link>
        <Link href="" className="hover:text-black hover:underline hover:underline-offset-4 hover:font-semibold min-w-[4.8rem] transition-all duration-200 ease-in-out">
          Woman
        </Link>
        <Link href="" className="hover:text-black hover:underline hover:underline-offset-4 hover:font-semibold min-w-[3.2rem] transition-all duration-200 ease-in-out">
          Boy
        </Link>
        <Link href="" className="hover:text-black hover:underline hover:underline-offset-4 hover:font-semibold min-w-8 transition-all duration-200 ease-in-out">
          Girl
        </Link>
      </div>
      <NavBarRight />
    </div>
  );
}
