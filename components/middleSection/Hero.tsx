"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import headshot from "../../public/images/headshot.svg"

const Hero = () => {
  const [jobTitle, setJobTitle] = useState("ENGINEER")

  useEffect(() => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const jobTitles = ["ENGINEER", "DEVELOPER", "CREATOR", "INNOVATOR", "RESEARCHER"];
    let i = 0;
    let iterations = 0;
    setInterval(() => {
      iterations = 0;
      const interval = setInterval(() => {
        setJobTitle(jobTitles[i].split("").map((letter, index) => {
          if (index < iterations) return letter;
          return alphabet[Math.floor(Math.random() * alphabet.length)]
        }).join(""));

        if (iterations >= jobTitles[i].length) clearInterval(interval);

        iterations += 1;
      }, 50)
      i = (i + 1) % jobTitles.length;
    }, 4000)
  }, [])

  return (
    <div id="home" className="relative w-full h-screen px-4 md:px-0">
      {/* Job Title Behind the Image */}
      <div className="absolute inset-0 bottom-[40%] flex justify-center items-center z-0">
        <span
          className="font-bold text-[6rem] md:text-[10rem] tracking-wider text-text opacity-10"
        >
          {jobTitle}
        </span>
      </div>

      {/* Image in Front of the Job Title */}
      <div className="absolute bottom-0 left-[50%] transform translate-x-[-50%] flex justify-center items-center z-10">
        <Image
          src={headshot}
          alt="Headshot"
          width={600}
          height={600}
          className="w-[600px] h-[600px] object-contain"
        />
      </div>

      {/* Text and Button in Front of the Image */}
      <div className="relative flex w-full h-screen justify-between items-end pb-[10rem] z-20 px-32">
        {/* Left Section with smaller text */}
        <div className="w-1/3 flex flex-col text-text leading-none justify-center items-start">
          <span className="font-normal text-[1rem] md:text-[2rem] tracking-widest mb-2 text-primary">I am</span>
          <span className="font-bold text-[2rem] md:text-[3rem] tracking-wider text-text mb-3">Tejjus Bhat,</span>
          <span className="w-full font-normal text-[1rem] mt-4 leading-snug">
            I`m a software engineer who loves to tinker. I have experience building AI models, APIs, and developing full-stack web applications.
          </span>
        </div>

        {/* Button on the right */}
        <div className="w-1/3 flex justify-center items-center">
          <a href="mailto:tejjusbhat@gmail.com">
            <button className="border-[3px] md:border-[4px] border-primary text-[0.8rem] md:text-[1rem] font-bold text-primary bg-transparent px-4 md:px-6 py-3 md:py-4 transform hover:translate-x-2 hover:scale-110 hover:text-text hover:border-text transition-transform duration-200">
              Click here to connect!!
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
