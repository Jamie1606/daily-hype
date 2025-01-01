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
        <ShadAlert variant={success ? "success" : "error"} className={cn("w-full", className)}>
          <InfoIcon width={20} height={20} className={cn("fill-red-600", success && "fill-green-600")} />
          <AlertTitle className={cn("text-red-600 font-semibold", success && "text-green-600")}>{success ? "Message" : "Error"}</AlertTitle>
          <AlertDescription className={cn("text-red-600", success && "text-green-600")}>{message}</AlertDescription>
        </ShadAlert>
      )}
    </>
  );
};

export default Alert;
