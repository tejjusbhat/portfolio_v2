"use client"

import { useState, useEffect } from "react"
import Scrolldown from "../Scrolldown"

const Hero = () => {
  const [jobTitle, setJobTitle] = useState("AI developer")

  useEffect(() => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const jobTitles = ["AI developer", "Data Scientist", "ML Engineer", "Full Stack Developer", "Computer Vision Dev", "Graphic Designer", "Video Editor"];
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

  const checkVowel = (x: String) => {
    let result: boolean = false;
    if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "M") {
      result = true;
    }
    else {
      result = false;
    }
    return result;
  };

  return (
    <div id="home" className="w-full flex justify-center px-4 md:px-0">
      <div className="w-full md:w-[85%] flex flex-col text-text leading-none mt-[18%]">
        <span className="font-normal text-xs md:text-sm tracking-widest mb-2 text-primary">Hello, my name is</span>
        <span className="font-bold text-[2.5rem] md:text-[4.5rem] tracking-wider text-text mb-3">Tejjus Bhat,</span>
        <span className="font-normal text-[1.75rem] md:text-[3rem] tracking-wider">I'm {checkVowel(jobTitle.charAt(0)) ? "an" : "a"} <strong className="text-primary">{jobTitle}.</strong></span>
        <span className="w-full md:w-3/5 font-normal text-[1rem] md:text-[1.2rem] mt-4 leading-snug">I'm a software engineer who loves to tinker. I have experience building AI models & APIs and developing full-stack web applications. I love to learn and work on new challenges.</span>
        <a href="mailto:tejjusbhat@gmail.com">
          <button className="border-[3px] md:border-[4px] border-primary text-[1.25rem] md:text-[1.5rem] font-bold text-primary bg-transparent px-4 md:px-6 py-3 md:py-4 mt-16 md:mt-32 w-[12rem] md:w-[16rem] transform hover:translate-x-2 hover:scale-110 hover:text-text hover:border-text transition-transform duration-200">Let's Connect!</button>
        </a>
      </div>

      {/* <Scrolldown /> */}
    </div>
  )
}

export default Hero
