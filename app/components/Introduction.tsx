"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

export default function Introduction() {
  const words = [
    " Frontend Engineer.",
    " Backend Engineer.",
    " Full Stack Engineer.",
  ];
  const text = useRef<HTMLInputElement>(null);

  useGSAP(() => {
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    let andTimeline = gsap.timeline().pause();
    andTimeline.add(gsap.to(".and", { text: " and I am a ", duration: 0.5 }));

    let boxTimeline = gsap.timeline();

    boxTimeline
      .to(".box", {
        duration: 1,
        width: "21vw",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .to(".hi", {
        duration: 1,
        text: "  Apiraam",
        onComplete: () => {
          andTimeline.play();
          masterTimeline.play();
        },
      })
      .to(".box", { duration: 1, height: "5vw", ease: "elastic.out" });

    let masterTimeline = gsap.timeline({ repeat: -1, delay: 0.5 }).pause();
    words.forEach((word) => {
      let timeline = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      timeline.to(".text", { duration: 1, text: word });
      masterTimeline.add(timeline);
    });
  });
  return (
    <div className="py-4 px-2 mt-20 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-4 text-9xl text-gray-900 h-60">
        <span>Hi, I'm</span>
        <span> </span>
        <span className="box"></span>
        <span className="hi"></span>
        <span className="and"></span>
        <span className="text font-bold"></span>
        <span className="cursor">_</span>
      </h2>
    </div>
  );
}
