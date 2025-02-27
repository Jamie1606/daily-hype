"use client";

import url from "@/constant/url";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignUpForm from "./sign-up-form";
import OTPForm from "./otp-form";

const Form = () => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (step === 3)
      setTimeout(() => {
        router.push(url.SIGNIN), 1500;
      });
  }, [step]);

  return (
    <>
      {/* Sign Up Form */}
      {step === 1 && <SignUpForm setEmail={setEmail} updateStep={setStep} />}

      {/* Email OTP Form */}
      {step === 2 && <OTPForm email={email} updateStep={setStep} />}
    </>
  );
};

export default Form;
