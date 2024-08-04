import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type MaxWidthWrapperProps = ComponentProps<"div">;

export function MaxWidthWrapper({
  children,
  className,
  ...props
}: Readonly<MaxWidthWrapperProps>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
