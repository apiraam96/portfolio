import Navbar from "../components/Navbar";
import {Button} from '@nextui-org/button'

export default function Introduction() {
    
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
      <>
      <Navbar />
      <section className="h-screen px-4 py-10 md:px-6 md:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="flex flex-col"
          >
              <h1 className="mb-9 font-extrabold tracking-tighter text-5xl flex-col md:text-8xl lg:col-start-1 lg:col-span-2 lg:text-[7rem]">
                Contact me
              </h1>
              <form className="flex flex-col">
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Message</label>
                <textarea />
                <Button>Submit</Button>
              </form>
          </div>
        </div>
      </section>
      </>
    );
  }