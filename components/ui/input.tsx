import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import CancelIcon from "@/icons/svg/cancel";
import VisibilityOffIcon from "@/icons/svg/visibility_off";
import VisibilityIcon from "@/icons/svg/visibility";

const inputVariants = cva("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", {
  variants: {
    variant: {
      default: "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      input: "border-input border-[1.2px] focus-visible:border-brand focus-visible:border-2 focus-visible:outline-none",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  clear?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, value, type, clear = false, onChange, ...props }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const [isCancelVisible, setIsCancelVisible] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);

  React.useEffect(() => {
    if (clear) {
      setInputValue("");
      setIsCancelVisible(false);
    }
  }, [clear]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCancelVisible(!!event.target.value);
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  const handleClear = () => {
    if (inputRef && typeof inputRef !== "function" && inputRef?.current) {
      inputRef.current.value = "";
    }
    setIsCancelVisible(false);
    setInputValue(type !== "number" ? "" : undefined);

    if (onChange) {
      if (inputRef && typeof inputRef !== "function" && inputRef?.current) {
        const event = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(event); // Dispatch the native input event
      }
    }
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-full lg:w-fit relative">
      <input value={inputValue} type={type !== "password" ? type : isPasswordVisible ? "text" : "password"} className={cn(inputVariants({ variant }), "pr-10", type === "password" && "pr-[3.4rem] 2xl:pr-[4.2rem]", className)} ref={inputRef} onChange={handleChange} {...props} />

      {isCancelVisible && <CancelIcon width={16} height={16} className="absolute top-1/2 right-2 -translate-y-[30%] pointer-events-auto cursor-pointer fill-slate-500 hover:fill-black 2xl:w-5 2xl:h-5 2xl:top-[47%] 2xl:right-3" onClick={handleClear} />}

      {type === "password" && (isPasswordVisible ? <VisibilityOffIcon width={16} height={16} onClick={handlePasswordVisibility} className={cn("absolute top-1/2 right-3 -translate-y-[28%] fill-slate-500 hover:fill-black cursor-pointer pointer-events-auto 2xl:w-5 2xl:h-5 2xl:top-[47%]", isCancelVisible && "right-8 lg:right-7 2xl:w-5 2xl:h-5 2xl:right-10 2xl:top-[47%]")} /> : <VisibilityIcon width={18} height={18} onClick={handlePasswordVisibility} className={cn("absolute top-1/2 right-3 -translate-y-[28%] fill-slate-500 hover:fill-black cursor-pointer pointer-events-auto 2xl:w-5 2xl:h-5 2xl:top-[47%]", isCancelVisible && "right-8 lg:right-7 2xl:w-5 2xl:h-5 2xl:right-10 2xl:top-[47%]")} />)}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
