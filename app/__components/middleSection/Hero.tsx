"use client"

import { useState, useEffect } from "react"

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
    <div className="w-full flex justify-center">
      <div className="w-[85%] flex flex-col text-text leading-none gap-2 mt-[18%]">
        <span className="font-normal text-s tracking-widest mb-2 text-primary">Hello, my name is</span>
        <span className="font-bold text-[4.5rem] tracking-wider text-text mb-3">Tejjus Bhat,</span>
        <span className="font-normal text-[3rem] tracking-wider">I'm {checkVowel(jobTitle.charAt(0)) ? "an" : "a"} <strong className="text-primary">{jobTitle}.</strong></span>
        <span className="w-1/2 font-normal text-s mt-2 leading-snug">A curious cat who's always looking to have fun solving problems and learning new things. </span>
      </div>
    </div>
  )
}

export default Hero