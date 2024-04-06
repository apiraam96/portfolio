"use client";

import Image from "next/image";
import { gsap, random } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";
import { useEffect, useRef } from "react";
import Shapes from "./Shapes";

gsap.registerPlugin(TextPlugin);

export default function Introduction() {
  const component = useRef(null);

  const words = [
    " Frontend Engineer.",
    " Backend Engineer.",
    " Full Stack Engineer.",
  ];
  const text = useRef<HTMLInputElement>(null);

  useGSAP(() => {
    // let cursor = gsap.to(".cursor", {
    //   opacity: 0,
    //   ease: "power2.inOut",
    //   repeat: -1,
    // });

    // let andTimeline = gsap.timeline().pause();
    // andTimeline.add(gsap.to(".and", { text: " and I am a ", duration: 0.5 }));

    // let boxTimeline = gsap.timeline();

    // boxTimeline
    //   .to(".box", {
    //     duration: 1,
    //     width: "21vw",
    //     delay: 0.5,
    //     ease: "power4.inOut",
    //   })
    //   .to(".hi", {
    //     duration: 1,
    //     text: "  Apiraam",
    //     onComplete: () => {
    //       andTimeline.play();
    //       masterTimeline.play();
    //     },
    //   })
    //   .to(".box", { duration: 1, height: "5vw", ease: "elastic.out" });

    // let masterTimeline = gsap.timeline({ repeat: -1, delay: 0.5 }).pause();
    // words.forEach((word) => {
    //   let timeline = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    //   timeline.to(".text", { duration: 1, text: word });
    //   masterTimeline.add(timeline);
    // });

    const tl = gsap.timeline();
    tl.fromTo(
      ".name-animation",
      {
        x: -100,
        opacity: 0,
        rotate: -10,
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        ease: "elastic.out(1,0.3)",
        transformOrigin: "left top",
        stagger: {
          each: 0.1,
          from: "random",
        },
      }
    );

    tl.fromTo(
      ".jobTitle",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.4)",
      }
    );
  });

  const renderLetters = (name: string, key: string) => {
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };
  return (
    // <div className="py-4 px-2 mt-20 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    //   <h2 className="mb-4 text-9xl text-gray-900 h-60">
    //     <span>Hi, I'm</span>
    //     <span> </span>
    //     <span className="box"></span>
    //     <span className="hi"></span>
    //     <span className="and"></span>
    //     <span className="text font-bold"></span>
    //     <span className="cursor">_</span>
    //   </h2>
    // </div>
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="flex flex-wrap min-h-[70vh] items-center "
          aria-label="Apiraam Selvabaskaran"
        >
          <div className="flex">
            <h1 className="mb-8 font-extrabold tracking-tighter text-4xl md:text-8xl">
              <span className="block text-red-500">
                {renderLetters("Apiraam", "first")}
              </span>
              <span className="-mt-[.2em] text-slate-600">
                {renderLetters("Selvabaskaran", "last")}
              </span>
              <span className="jobTitle block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
                Software Engineer
              </span>
            </h1>
          </div>
          <Shapes />
        </div>
      </div>
    </section>
  );
}
