"use client";

import { cn } from "@/lib/utils";

const Button = ({ className }: { className?: string }) => {
  return (
    <button
      onClick={() => {
        window.location.href = "mailto:mtarekmo21@gmail.com";
      }}
      className={cn(
        "inline-flex h-12 w-full md:w-[239px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-b from-[#161A31] to-[#06091F] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:bg-gradient-to-br hover:from-[#161A31] hover:to-[#06091F] hover:bg-[length:100%_200%] hover:text-white",
        className
      )}
    >
      Contact Me Now
    </button>
  );
};

export default Button;
