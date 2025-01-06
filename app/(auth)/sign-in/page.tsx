import url from "@/constant/url";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./sign-in-form";

const SignInPage = () => {
  return (
    <div className="flex flex-col h-full px-4 py-4 w-screen lg:px-20 lg:flex-row lg:h-screen lg:py-12 2xl:px-24">
      <div className="flex flex-col w-full">
        <Link className="text-3xl tracking-wider font-bold cursor-pointer max-w-fit" href={url.HOME}>
          DAILYHYPE
        </Link>
        <div className="flex flex-col w-full h-full mt-[35%] items-center justify-center lg:mt-0">
          <SignInForm />
          <label className="mt-6 text-[14px]">
            Don&apos;t have an account?&nbsp;
            <Link className="text-blue-600 hover:underline" href={url.SIGNUP}>
              Sign Up
            </Link>
          </label>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-full mt-20 items-center">
        <div className="relative w-[600px] h-[95%] overflow-hidden rounded-3xl">
          <Image
            src="/sign-in-bg.webp"
            alt="Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
