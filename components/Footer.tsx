import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Button from "./Button";
const Footer = () => {
  return (
    <div id="contact" className="h-[27rem] max-w-screen dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col h-full justify-between items-center" id="footer">
        <div className="flex flex-col items-center " data-aos="zoom-in-up">
          <p className="  w-[91vw] text-[36px] text-center font-inter font-bold md:w-[720px] md:text-[48px]">
            Ready to take <span className="text-[#CBACF9] "> your</span> digital
            presence to the next level?
          </p>
          <p className="max-w-[91vw] text-center text-[16px] text-[#C1C2D3]">
            Reach out to me today and lets discuss how I can help you achieve
            your goals
          </p>
          <Button className=" mt-5 text-center" />
        </div>
  
        <div className="mb-[50px] flex gap-4 items-center justify-center">
          <a
            href="https://www.facebook.com/mohamed.tarek.mohamed.youssef"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook2 className=" w-[24px] h-[24px] " color="#ffffff" />
          </a>
          <a
            href="https://wa.me/201203013442"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-[24px] h-[24px]" color="#ffffff" />
          </a>
          <a
            href="https://github.com/mohamedtarek45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-[24px] h-[24px]" color="#ffffff" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-tarek-2b40b4275/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-[24px] h-[24px]" color="#ffffff" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
