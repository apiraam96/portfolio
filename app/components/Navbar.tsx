import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="pl-5">
            <p>INSERT LOGO HERE</p>
          </div>
        <div className="navbar-links">
          <p>Projects</p>
          <p>About</p>
        </div>
        </div>
      </nav>
    </>
  );
}
