"use client";
import dynamic from "next/dynamic";
import { useState, Suspense, lazy } from "react";


const DotLottieReact = lazy(() => import("@lottiefiles/dotlottie-react").then((mod) => ({ default: mod.DotLottieReact })));
const TbClipboardCopy = dynamic(() => import("react-icons/tb").then((mod) => mod.TbClipboardCopy), {
  ssr: false,
});
const TbCopyCheckFilled = dynamic(() => import("react-icons/tb").then((mod) => mod.TbCopyCheckFilled), {
  ssr: false,
});
const CopyEmailAddress = () => {
  const [copied, setCopied] = useState(false);
  const [ showAnimation, setShowAnimation] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mtarekmo21@gmail.com");
      setCopied(true);
      setShowAnimation(true); // تأكد من تحميل DotLottieReact عند الحاجة فقط
      setTimeout(() => {
        setCopied(false);
        setShowAnimation(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div>
      {showAnimation && (
        <Suspense fallback={""}>
          <DotLottieReact
            key="playing"
            className="absolute top-0 -left-3"
            src="../animations/Animations1.lottie"
            loop
            autoplay
            height={200}
            width={400}
          />
        </Suspense>
      )}
      <button
        onClick={handleCopy}
        className="relative w-[197px] mx-auto mt-6 inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex gap-x-2 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {copied ? <TbCopyCheckFilled className="w-[20px] h-[20px]" /> : <TbClipboardCopy className="w-[20px] h-[20px]" />}
          Copy Email Address
        </span>
      </button>
    </div>
  );
};

export default CopyEmailAddress;
