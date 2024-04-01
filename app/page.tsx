"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const words = [" Frontend Engineer.", " Backend Engineer.", " Full Stack Engineer."];
  const text = useRef<HTMLInputElement>(null);

  useGSAP(() => {
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    let boxTimeline = gsap.timeline();

    boxTimeline
      .to(".box", {
        duration: 1,
        width: "20vw",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".hi", { duration: 1, y: "-7vw", ease: "power3.out", onComplete: () => masterTimeline.play() })
      .to(".box", { duration: 1, height: "7vw", ease: "elastic.out" });

    let masterTimeline = gsap.timeline({ repeat: -1, delay: 1 }).pause();
    words.forEach((word) => {
      let timeline = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      timeline.to(".text", { duration: 1, text: word });
      masterTimeline.add(timeline);
    });
  });

  return (
    <main>
      <Navbar />
      <div>
        <h1>
          <span>Hi, Im </span>
          <span className="box"></span>
          <span className="hi"> Apiraam </span>
          <span> and Im a</span>
          <span className="text"></span>
          <span className="cursor">_</span>
        </h1>
      </div>
    </main>
  );
}
