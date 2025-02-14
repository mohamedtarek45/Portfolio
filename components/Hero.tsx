import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className=" absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <Spotlight xOffset={300} />
      <div className="flex justify-center relative z-10 my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
       
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
            Hi I&apos;m Mohamed Tarek
          </p>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          <a href="#projects">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#1e3a8a,45%,#3b82f6,55%,#1e3a8a)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
              See my work
              <FaLocationArrow className="ml-2 h-4 w-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
