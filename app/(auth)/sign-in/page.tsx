import url from "@/constant/url";
import Link from "next/link";
import SignInForm from "./sign-in-form";

const SignInPage = () => {
  return (
    <div className="flex flex-col w-fit mx-auto items-center justify-center my-20 shadow-md p-12 border rounded-lg">
      <SignInForm />
      <label className="mt-6 text-[14px]">
        Don&apos;t have an account?&nbsp;
        <Link className="text-blue-600 hover:underline" href={url.SIGNUP}>
          Sign Up
        </Link>
      </label>
    </div>
  );
};

export default SignInPage;
