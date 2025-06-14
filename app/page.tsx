
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import Footer from "@/components/Footer";


export default function Home() {

  return (
    <>
      <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 ">
        <div className="max-w-7xl w-full">
          <FloatingNav
            navItems={[
              {
                name: "Top",
                link: "/",
                icon: <FaHome />,
              },
              {
                name: "About",
                link: "#about",
                icon: <IoPerson />,
              },
              {
                name: "Projects",
                link: "#projects",
                icon: <MdWork />,
              },
              {
                name: "Contact me",
                link: "#contact",
                icon: <IoCall />,
              },
            ]}
          />
          <Hero />
          <Grid />
          <RecentProject />
        </div>
      </main>
      <Footer />
    </>
  );
}
