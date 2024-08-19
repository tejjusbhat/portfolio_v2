import React from 'react';
import Image from 'next/image';
import headshot from '@/public/images/headshot.jpg';

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center px-4 md:px-0">
      <div className="w-full md:w-[84%] flex flex-col md:flex-row items-center mt-[10%] relative">
        <div className="flex flex-col text-text leading-none md:w-3/5 w-full mb-8 md:mb-0">
          <span className="font-bold text-[1.5rem] md:text-[2rem] tracking-wider text-primary mb-6">
            About Me
          </span>
          <span className="font-normal text-[1rem] leading-relaxed">
            I’m Tejjus Bhat, a software engineer and AI enthusiast who loves solving problems and taking on new challenges. I have a strong foundation in Python, JavaScript, and some basic knowledge of Rust, and I’ve worked on projects ranging from VR training simulators to AI-powered chatbots.
            <br /><br />
            Currently, I’m gaining experience as a Trainee Apprentice at INMAS (DRDO), where I’m involved in developing VR-based training solutions. I’m always eager to learn and thrive in fast-paced environments where I can apply my logical mindset to solve real-world problems.
            <br /><br />
            When I’m not coding, you can find me playing video games, watching anime, or reading manga. I love to listen to music of various genres.
            <br /><br />
            The following are my technical skills:
          </span>

          <ul className="list-disc text-[1rem] list-inside mt-4 space-y-3 leading-normal">
            <li><strong>Languages:</strong> Python, JavaScript, Rust</li>
            <li><strong>Concepts:</strong> AI/ML, Data Science, NLP, Generative AI, REST API, Git, Linux, CI/CD</li>
            <li><strong>Frameworks and Libraries:</strong> React.js, Next.js, Flask, Pytorch, OpenCV, Tensorflow</li>
            <li><strong>Databases:</strong> MySQL, MongoDB, Convex</li>
            <li><strong>Software:</strong> Unity, Photoshop, After Effects</li>
          </ul>
        </div>
        <div className="md:w-2/5 w-full flex justify-center z-50">
          <Image
            src={headshot}
            alt="Placeholder Headshot"
            className="w-full md:w-3/4 object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
