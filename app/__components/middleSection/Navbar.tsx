"use client";
import React from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

const Navbar = () => {
  return (
    <div
      className={`w-full px-8 h-20 justify-between backdrop-filter backdrop-blur-lg bg-opacity-10 fixed top-0 left-0 z-50 md:flex hidden`}
    >
      <div className="h-full flex items-center justify-center">
        <Image src={logo} alt="Logo" className="w-fit h-12" />
      </div>
      <div className="w-[40%] h-full flex justify-between items-center mr-12">
        <a href="/" className="text-text font-bold hover:scale-105">
          Home
        </a>
        <a href="#about" className="text-text font-bold hover:scale-105">
          About
        </a>
        <a href="#experience" className="text-text font-bold hover:scale-105">
          Experience
        </a>
        <a href="#projects" className="text-text font-bold hover:scale-105">
          Projects
        </a>
        <a href="#contact" className="text-text font-bold hover:scale-105">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
