'use client'

import Link from "next/link";
import {useEffect, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const[isSticky, setIsSticky] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="w-full">
        <nav className="h-12 bg-white flex items-center justify-between p-5 top-0 z-50 mx-auto max-w-7xl md:sticky">
          <div>
            <ul>
              <li><Link href='/'>apiraam.</Link></li>
            </ul>
          </div>
          <div className="md:static md:min-h-fit md:w-auto absolute bg-white min-h-[60vh] left-0 top-[5%] w-full md:flex items-center px-5 hidden">
            <ul className="flex flex-col gap-10 md:flex-row">
              <li><a className="hover:text-gray-500" href="#">About</a></li>
              <li><a className="hover:text-gray-500" href="#">Projects</a></li>
              <li><a className="hover:text-gray-500" href="#">Contact</a></li>
            </ul>
          </div>
          {isMenuOpen && (
            <div className="md:static md:min-h-fit md:w-auto absolute bg-white min-h-[30vh] left-0 top-[5%] w-full flex items-center px-5 z-10">
            <ul className="flex flex-col gap-10 md:flex-row">
              <li><a className="hover:text-gray-500" href="#">About</a></li>
              <li><a className="hover:text-gray-500" href="#">Projects</a></li>
              <li><a className="hover:text-gray-500" href="#">Contact</a></li>
            </ul>
          </div>
          )}
          <button className="md:hidden" onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </nav>
    </header>
  );
}
