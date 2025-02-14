import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { MdArrowOutward } from "react-icons/md";
import Scrollbar from "./Scrollbar";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const FloatCard2 = ({
  title,
  description,
  iconLists,
  src,
  link,
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
    <PinContainer
      containerClassName="md:w-[600px] md:h-[618px] w-full z-10 h-[425px] "
      className="md:min-w-[600px] md:h-[618px] w-full  bg-gradient-to-b from-[#04071D] to-[#0C0E23] "
      title={link}
      href={link}
    >
      <div className="flex flex-col items-center  p-4 tracking-tight text-slate-100/50 w-[91vw] h-[425px] md:w-[600px] md:h-[618px]   ">
  
        <div className="md:w-[552px] md:h-[330px]  sm:w-96 w-full bg-[#13162D]  flex justify-center overflow-hidden">
          <div className="relative md:w-[449.91px] md:h-[319.73px] w-[278.2px] h-[197.71px] rounded-sm top-[28px] ">
            <Image src={src} fill alt="thumbnail" />
          </div>
        </div>
        <p className="self-start text-[20px] md:text-[32px] font-bold font-inter mt-4 dark:text-white">
          {title}
        </p>
        <Scrollbar>
          <p className="text-[14px] md:text-[20px]  mt-2 dark:text-[#BEC1DD]">
            {description}
          </p>
        </Scrollbar>

        <div className="flex justify-between items-center absolute bottom-4 w-[calc(100%-15px)] md:w-[552px] left-1/2 -translate-x-1/2  ">
            {content}
            <p className="text-[14px] md:text-[20px] text-[#CBACF9] flex gap-2 items-center">
              Check Live Site
              <MdArrowOutward />{" "}
            </p>
          </div>
      </div>
    </PinContainer>
  );
};
export default FloatCard2;
