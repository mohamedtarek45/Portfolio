import FloatCard from "./FloatCard";
import FloatCard2 from "./FloatCard2";
import { projects } from "@/data/index";
const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Let&apos;s take a look at the{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center py-4 gap-6 mt-10">
        {projects.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <FloatCard
                key={index}
                title={item.title}
                iconLists={item.iconLists}
                link={item.link}
                src={item.img}
                description={item.des}
              />
            );
          } else {
            return (
              <FloatCard2
                key={index}
                title={item.title}
                iconLists={item.iconLists}
                link={item.link}
                src={item.img}
                description={item.des}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RecentProject;
