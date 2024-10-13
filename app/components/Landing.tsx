import { Spotlight } from "./ui/Spotlight";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Introduction from "./ui/TitleAnimation";
import LitButton from "./ui/LitButton";
import { FaExternalLinkAlt } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hi, my name is
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="APIRAAM SELVABASKARAN"
            duration={2}
          />
          <span className="my-4 text-center md:tracking-wider text-xs md:text-sm lg:text-md">
            <Introduction />
          </span>
          <a href="www.google.com">
            <LitButton
              title="Check out my CV"
              icon={<FaExternalLinkAlt />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
