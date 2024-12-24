import url from "@/constant/url";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./sign-up-form";

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen px-20 py-12">
      <div className="flex flex-col w-full items-center">
        <Link className="text-3xl tracking-wider font-bold cursor-pointer max-w-fit self-start" href={url.HOME}>
          DAILYHYPE
        </Link>
        <div className="relative w-[600px] h-[600px] overflow-hidden rounded-3xl mt-12">
          <Image
            src="/sign-up-bg.webp"
            alt="Image"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               600px"
          />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <SignUpForm />
        <label className="mt-6 text-[14px]">
          Already have an account?&nbsp;
          <Link className="text-blue-600 hover:underline" href={url.SIGNIN}>
            Sign In
          </Link>
        </label>
      </div>
    </div>
  );
};

export default SignUpPage;
