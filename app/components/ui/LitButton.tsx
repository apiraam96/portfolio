import React from "react";

const LitButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg" />
      <div className="inline-flex px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent gap-2 items-center">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default LitButton;
