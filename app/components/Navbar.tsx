import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="pl-5">
            <p>apiraam.</p>
          </div>
        <div className="navbar-links">
          <p>Projects</p>
          <p>About</p>
          <p>Resume</p>
        </div>
        </div>
      </nav>
    </>
  );
}
