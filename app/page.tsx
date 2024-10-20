import React, { lazy } from "react";
// import Landing from "./components/Landing";
import { Suspense } from "react";
import { FloatingNav } from "./components/ui/NavBar";
// import Grid from "./components/ui/Grid";
// import Projects from "./components/Projects";
import { navItems } from "@/data";
// import Contact from "./components/Contact";

const Landing = lazy(() => import("./components/Landing"));
const Grid = lazy(() => import("./components/ui/Grid"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

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
        <Suspense>
          <Landing />
        </Suspense>
        <Suspense>
          <Grid />
        </Suspense>
        <Suspense>
          <Projects />
        </Suspense>
        <Suspense>
          <Contact />
        </Suspense>
      </div>
    </main>
  );
}
