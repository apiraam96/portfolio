import React from "react";
import LitButton from "./ui/LitButton";
import { FaMailchimp } from "react-icons/fa";
import { socialMedia } from "@/data";
import { HeroHighlightDemo } from "./ui/HeroDEMO";

const Contact = () => {
  return (
    <div className="w-full pt-10 md:pt-20 pb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 in-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-gull h-full opacity-100"
        />
      </div>
      <div className="flex flex-col items-center">
        <HeroHighlightDemo title="Connect with me" color="blue" />
        <div className="pt-10 flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-[#fe2858] rounded-full" />
                <div className="inline-flex px-4 py-4 md:px-5 md:py-5 bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent gap-2 items-center">
                  <img src={profile.img} className="md:w-7 md:h-7 w-6 h-6" />
                </div>
              </button>
            </a>
          ))}
        </div>
      </div>

      <div className="flex md:flex-row-reverse mt-16 flex-col justify-between items-center">
        <p className="md:text-sm text-[0.6rem] md:font-normal font-light">
          Built by Apiraam with ❤️
        </p>
        <p className="text-[0.6rem] md:text-sm md:font-normal font-light">
          Copyright © 2024 Apiraam Selvabaskaran
        </p>
      </div>
    </div>
  );
};

export default Contact;
