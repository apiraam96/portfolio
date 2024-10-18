import React from "react";
import Image from "next/image";
import Landing from "./components/Landing";
import { FloatingNav } from "./components/ui/NavBar";
import { FaHome } from "react-icons/fa";
import Grid from "./components/ui/Grid";
import { useScroll, useTransform } from "framer-motion";
import { LampContainer, LampDemo } from "./components/ui/lamp";
import { HeroHighlight } from "./components/ui/HeroHighlight";
import { Highlight } from "./components/ui/HeroHighlight";
import Projects from "./components/Projects";
import { navItems } from "@/data";
import Contact from "./components/Contact";

export default function Home() {
  return (
    // <>
    //   <Navbar />
    //   <Introduction />
    //   <About />
    //   <Projects />
    // </>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Landing />
        <Grid />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
