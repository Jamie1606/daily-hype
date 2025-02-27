import InfoIcon from "@/icons/svg/info";
import { AlertDescription, AlertTitle, Alert as ShadAlert } from "../ui/alert";
import { cn } from "@/lib/utils";

interface AlertProps {
  message?: string;
  success: boolean;
  className?: string;
}

const Alert = ({ message, success, className }: AlertProps) => {
  return (
    <>
      {message && (
        <ShadAlert variant={success ? "success" : "error"} className={cn("w-full 2xl:border-[1.5px]", className)}>
          <InfoIcon width={20} height={20} className={cn("-mt-0.5 fill-red-600 2xl:w-6 2xl:h-6 2xl:mt-0.5 2xl:mr-2", success && "fill-green-600")} />
          <AlertTitle className={cn("text-red-600 font-semibold 2xl:text-lg", success && "text-green-600")}>{success ? "Message" : "Error"}</AlertTitle>
          <AlertDescription className={cn("text-red-600 2xl:text-[16px]", success && "text-green-600")}>{message}</AlertDescription>
        </ShadAlert>
      )}
    </>
  );
};

export default Alert;
