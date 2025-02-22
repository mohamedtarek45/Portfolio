"use client";
import dynamic from "next/dynamic";

import React, { JSX, useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const AnimatePresence = dynamic(() => import("framer-motion").then((mod) => mod.AnimatePresence), { ssr: false });
const Link = dynamic(() => import("next/link"), { ssr: false });
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null);
  const isHovering = useRef(false);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   // Check if current is not undefined and is a number
  //   if (typeof current === "number") {
  //     let direction = current! - scrollYProgress.getPrevious()!;

  //     if (scrollYProgress.get() < 0.05) {
  //       setVisible(false);
  //     } else {
  //       if (direction < 0) {
  //         setVisible(true);
  //       } else {
  //         setVisible(false);
  //       }
  //     }
  //   }
  // });
  const handlevisible = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // إلغاء الـ timeout الحالي
    }

    setVisible(true);

    timeoutRef.current = setTimeout(() => {
      if (!isHovering.current) {
        setVisible(false);
      }
    }, 2500);
  };
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.01) {
        setVisible(false);
      } else {
        handlevisible();
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => {
          console.log(timeoutRef);

          setVisible(false);

          isHovering.current = false;
        }}
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 p-3 px-4 items-center justify-center space-x-4",
          className
        )}
      >
        
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </MotionDiv>
    </AnimatePresence>
  );
};
