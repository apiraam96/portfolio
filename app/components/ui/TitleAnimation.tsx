"use client";

import Image from "next/image";
import { gsap, random } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";
import { useEffect, useRef } from "react";
import Shapes from "../Shapes";

gsap.registerPlugin(TextPlugin);

export default function Introduction() {
  const component = useRef(null);

  const words = [
    " FRONTEND ENGINEER.",
    " BACKEND ENGINEER.",
    " FULLSTACK ENGINEER.",
  ];
  const text = useRef<HTMLInputElement>(null);

  useGSAP(() => {
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    let andTimeline = gsap.timeline().pause();
    andTimeline.add(gsap.to(".and", { text: "AND I AM A ", duration: 2 }));

    let boxTimeline = gsap.timeline();

    boxTimeline
      .to(".hi", {
        duration: 1,
        text: "  Apiraam",
        onComplete: () => {
          andTimeline.play();
          masterTimeline.play();
        },
      })
      .to(".box", { duration: 1, height: "5vw", ease: "elastic.out" });

    let masterTimeline = gsap.timeline({ repeat: -1, delay: 1 }).pause();
    words.forEach((word) => {
      let timeline = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      timeline.to(".text", { duration: 2.5, text: word });
      masterTimeline.add(timeline);
    });
  });

  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     ".name-animation",
  //     {
  //       x: -100,
  //       opacity: 0,
  //       rotate: -10,
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       rotate: 0,
  //       ease: "elastic.out(1,0.3)",
  //       transformOrigin: "left top",
  //       stagger: {
  //         each: 0.1,
  //         from: "random",
  //       },
  //     }
  //   );

  //   tl.fromTo(
  //     ".jobTitle",
  //     {
  //       y: 20,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "elastic.out(1, 0.4)",
  //     }
  //   );
  // });

  // tl.to(".shapes", {
  //   y: 100,
  //   opacity: 0
  // },
  // {
  //   opacity: 1,
  //   y: 0,
  //   duration: 1.5,
  //   ease: "elastic.out(1, 0.4"
  // })

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
    <h2>
      <span className="box"></span>
      <span className="and"></span>
      <span className="text font-bold text-[#2af0ea]"></span>
      <span className="cursor">_</span>
    </h2>
    // <section className="h-screen px-4 py-10 md:px-6 md:py-14 lg:py-16">
    //   <div className="mx-auto w-full max-w-7xl">
    //     <div
    //       className="grid min-h-[70vh] items-center justify-center lg:grid-cols-3"
    //       aria-label="Apiraam Selvabaskaran"
    //     >
    //         <h1 className="mb-9 font-extrabold tracking-tighter text-5xl flex-col md:text-8xl lg:col-start-1 lg:col-span-2 lg:text-[7rem]">
    //           <span className="block text-red-500">
    //             {renderLetters("Apiraam", "first")}
    //           </span>
    //           <span className="-mt-[.2em] text-slate-600">
    //             {renderLetters("Selvabaskaran", "last")}
    //           </span>
    //           <span className="jobTitle block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
    //             Software Engineer
    //           </span>
    //         </h1>
    //       <div className='shapes'>
    //       <Shapes />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
