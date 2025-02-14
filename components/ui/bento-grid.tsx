
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

import CopyEmailAddress from "../CopyEmailAddress";
import { GlobeDemo } from "./gridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  spareImg,
  titleClassName,
  imgClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  spareImg?: string;
  titleClassName?: string;
  imgClassName?: string;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"}  h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              className={cn(imgClassName, "object-cover , object-center")}
            />
          )}
        </div>
        <div
          className={`${
            id === 5 && "w-full opacity-80"
          } absolute right-0 -bottom-5`}
        >
          {spareImg && (
            <img
              src={spareImg}
              className={cn("object-cover , object-center , w-full ,h-full")}
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag

          <div className="absolute ">
            <BackgroundGradientAnimation></BackgroundGradientAnimation>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-normal text-neutral-600 text-s dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-[30px] lg:opacity-50">
              <div className="flex flex-col gap-3 ">
                {["React", "Next.js", "TypeScript"].map((item, idx) => (
                  <span
                    key={idx}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132e]"></span>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132e]"></span>
                {["mongoDB", "Tailwind", "Express"].map((item, idx) => (
                  <span
                    key={idx}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && <CopyEmailAddress />}
        </div>
      </div>
    </div>
  );
};
