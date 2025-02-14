import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import "overlayscrollbars/overlayscrollbars.css";

import Scrollbar from "./Scrollbar";
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const FloatCard = ({
  title,
  src,
  description,
  link,
  iconLists,
}: {
  title: string;
  src: string;
  link: string;
  iconLists: string[];
  description: string;
}) => {
  let content;
  if (iconLists.length > 4) {
    content = (
      <div className="flex flex-col items-center justify-center relative overflow-hidden max-w-[200px]">
        <InfiniteMovingCards items={iconLists} direction="right" speed="fast" />
      </div>
    );
  } else {
    content = (
      <div className="flex gap-4">
        {iconLists.map((item, idx) => (
          <div
            key={idx}
            className="w-[34px] h-[34px] md:w-[50px] md:h-[50px] bg-[#0C0E23] border rounded-full flex justify-center items-center"
          >
            <div className="relative w-[20px] h-[20px]">
              <Image src={item} fill alt="thumbnail" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <Link href={link || "/"}  target="_blank" rel="noopener noreferrer">
      <CardContainer
        className="inter-var relative "
      >
        <CardBody className=" w-full h-[425px] md:w-[600px] md:h-[618px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gradient-to-b from-[#04071D] to-[#0C0E23] border-white/[0.2] rounded-xl md:p-4 px-4 border">
          <div className="md:w-[552px] md:h-[330px] mt-[20px] md:mt-0 bg-[#13162D] rounded-md">
            <CardItem
              translateZ="100"
              className="w-full h-full flex justify-center overflow-hidden"
            >
              <div className="relative md:w-[449.91px] md:h-[319.73px] w-[278.2px] h-[197.71px] rounded-sm top-[28px]">
                <Image src={src} fill alt="thumbnail" />
              </div>
            </CardItem>
          </div>
          <CardItem
            translateZ="50"
            className="text-[20px] self-start md:text-[32px] font-bold font-inter mt-4 dark:text-white"
          >
            {title}
          </CardItem>
          <Scrollbar>
            <CardItem
              translateZ="60"
              className="text-[14px] md:text-[20px] mt-2 dark:text-[#BEC1DD]"
            >
              {description}
            </CardItem>
          </Scrollbar>

          <div className="flex justify-between items-center absolute bottom-4 w-[calc(100%-15px)] md:w-[552px] left-1/2 -translate-x-1/2  ">
            {content}
            <p className="text-[14px] md:text-[20px] text-[#CBACF9] flex gap-2 items-center">
              Check Live Site
              <MdArrowOutward />{" "}
            </p>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
};

export default FloatCard;
