"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui/button";
import LoadingIcon from "@/icons/svg/loading";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Alert from "@/components/shared/alert";
import { verifyEmail } from "./action";

interface OTPFormProps {
  updateStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  email: string;
}

const OTPFormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const OTPForm = ({ email, updateStep }: OTPFormProps) => {
  const [resendTimer, setResendTimer] = useState(30);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const x = setInterval(() => {
      if (resendTimer > 0) setResendTimer((prev) => prev - 1);
      else clearInterval(x);
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, [resendTimer]);

  const form = useForm<z.infer<typeof OTPFormSchema>>({
    resolver: zodResolver(OTPFormSchema),
    defaultValues: {
      pin: "",
    },
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: z.infer<typeof OTPFormSchema>) => {
    const result = await verifyEmail(email, data.pin);
    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        updateStep(3);
      }, 1500);
    } else {
      form.setError("pin", { type: "server", message: result.message });
    }
  };

  return (
    <>
      {form.formState.errors.pin?.message && <Alert success={false} message={form.formState.errors.pin?.message} className="mt-[30%] mb-2 w-full lg:mt-0 lg:mb-8 lg:w-[400px]" />}

      {success && <Alert success={true} message="Email verification successful." className="mt-[30%] mb-2 w-full lg:mt-0 lg:mb-8 lg:w-[400px]" />}

      <Form {...form}>
        <label className={cn("text-2xl mt-[50%] lg:mt-0 text-center lg:text-3xl font-semibold", form.formState.errors.pin?.message && "mt-4")}>Verify Your Email</label>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormDescription className="text-sm lg:text-[15px] mt-4">Please enter the one-time password sent to your email.</FormDescription>
                <FormControl>
                  <div className="flex flex-col items-center justify-center pt-2">
                    <InputOTP autoFocus required disabled={form.formState.isSubmitting} maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <Button
                      variant="link"
                      type="button"
                      disabled={resendTimer !== 0 || success}
                      onClick={() => {
                        setResendTimer(30);
                      }}
                      className="text-[13px] text-blue-500 disabled:cursor-not-allowed mt-1 self-end disabled:text-slate-500 lg:text-sm hover:underline hover:disabled:no-underline hover:underline-offset-2"
                    >
                      Resend again{resendTimer !== 0 && <span>({resendTimer}s)</span>}
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-2 w-[8rem] h-[2.6rem] mx-auto" variant="primary" disabled={form.formState.isSubmitting || success}>
            {form.formState.isSubmitting ? <LoadingIcon width={24} height={24} className="fill-white" /> : <span>Verify</span>}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default OTPForm;
