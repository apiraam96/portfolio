

import Image from "next/image";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";


export default function Home() {

  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
    </>
  );
}
