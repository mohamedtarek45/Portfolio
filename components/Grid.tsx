import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about" > 
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            dataAos="fade-up"
            title={item.title}
            description={item.description}
            img={item.img}
            spareImg={item.spareImg}
            titleClassName={item.titleClassName}
            imgClassName={item.imgClassName}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
