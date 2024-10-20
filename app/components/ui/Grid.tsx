import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { aboutItems } from "@/data";
import { HeroHighlightDemo } from "./HeroDEMO";
import { BackgroundBeams } from "./BackgroundBeams";

const Grid = () => {
  return (
    <section id="about" className="mt-5">
      <HeroHighlightDemo title="About me" color="blue" />
      <BentoGrid>
        {aboutItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
            },
            i
          ) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
