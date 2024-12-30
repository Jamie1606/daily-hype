import url from "@/constant/url";
import Image from "next/image";
import Link from "next/link";
import Form from "./form";

const SignUpPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full w-screen px-4 py-4 lg:h-screen lg:px-20 lg:py-12">
      <div className="flex flex-col w-full items-center">
        <Link className="text-3xl tracking-wider font-bold cursor-pointer max-w-fit self-start" href={url.HOME}>
          DAILYHYPE
        </Link>
        <div className="hidden lg:inline-block relative w-[600px] h-[95%] overflow-hidden rounded-3xl mt-12">
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
        <Form />
      </div>
    </div>
  );
};

export default SignUpPage;
