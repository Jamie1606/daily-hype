import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui/button";
import LoadingIcon from "@/icons/svg/loading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import InfoIcon from "@/icons/svg/info";

interface OTPFormProps {
  updateStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const OTPFormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const OTPForm = ({ updateStep }: OTPFormProps) => {
  const form = useForm<z.infer<typeof OTPFormSchema>>({
    resolver: zodResolver(OTPFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof OTPFormSchema>) => {
    console.log(data.pin);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    form.setError("pin", { type: "server", message: "Invalid verfiication code" });
  };

  return (
    <>
      {form.formState.errors.pin?.message && (
        <Alert variant="error" className="mb-8 w-[400px]">
          <InfoIcon width={20} height={20} className="fill-red-600" />
          <AlertTitle className="text-red-600 font-semibold">Error</AlertTitle>
          <AlertDescription className="text-red-600">{form.formState.errors.pin?.message}</AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <label className="text-center text-2xl font-semibold">Verify Your Email</label>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormDescription className="mt-4">Please enter the one-time password sent to your email.</FormDescription>
                <FormControl>
                  <InputOTP disabled={form.formState.isSubmitting} maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-6 w-[8rem] h-[2.6rem] mx-auto" variant="primary" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <LoadingIcon width={24} height={24} className="fill-white" /> : <span>Verify</span>}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default OTPForm;
