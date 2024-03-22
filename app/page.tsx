"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import {TextPlugin} from 'gsap/TextPlugin'
import { RoughEase } from "gsap/EasePack";
import { useEffect } from "react";

export default function Home() {
  const words = ["Apiraam.", "A Scientist.", "A Developer."];

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
        width: "13.5vw",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from('.hi', {duration: 1, y: "7vw", ease: "power3.out"})
      .to(".box", { duration: 1, height: "7vw", ease: "elastic.out" });

      let masterTimeline = gsap.timeline();
      words.forEach(word => {
        let timeline = gsap.timeline()
        timeline.to('.text', {duration: 1, text: word})
        masterTimeline.add(timeline)
      })
  });

  return (
    <main>
      <Navbar />
      <div>
        <h1>
          <span className="box"></span>
          <span className="hi">Hi, Im </span>
          <span className="text"></span>
          <span className="cursor">_</span>
        </h1>
      </div>
    </main>
  );
}
