import Image from "next/image";
import Navbar from "./components/OldNavbar";
import Introduction from "./components/ui/TitleAnimation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Landing from "./components/Landing";

export default function Home() {
  return (
    // <>
    //   <Navbar />
    //   <Introduction />
    //   <About />
    //   <Projects />
    // </>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Landing />
      </div>
    </main>
  );
}
