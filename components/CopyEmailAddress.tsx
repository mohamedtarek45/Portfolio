"use client";
import { TbClipboardCopy } from "react-icons/tb";
import { TbCopyCheckFilled } from "react-icons/tb";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const CopyEmailAddress = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mtarekmo21@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div>
      {copied && (
        <DotLottieReact
          key={copied ? "playing" : "stopped"} // هنا المفتاح بيتغير مع كل تغيير في copied
          className="absolute top-0 -left-3"
          src="../animations/Animations1.lottie"
          loop={copied}
          autoplay={copied}
          height={200}
          width={400}
        />
      )}
      <button
        onClick={handleCopy}
        className="relative w-[197px] mx-auto mt-6 inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex gap-x-2 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {copied ? (
            <TbCopyCheckFilled className="w-[20px] h-[20px] " />
          ) : (
            <TbClipboardCopy className="w-[20px] h-[20px]" />
          )}
          Copy Email Address
        </span>
      </button>
    </div>
  );
};

export default CopyEmailAddress;
