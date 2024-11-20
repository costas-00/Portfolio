import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section className="flex justify-center items-center px-8 sm:px-6 md:px-8 py-20">
      <div>
        <BentoGrid className="w-full py-10 font-courier">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              videoSrc={item.videoSrc} // Trimite sursa videoclipului
              videoClassName={item.imgClassName} // Opțional pentru styling
              titleClassName={item.titleClassName}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
