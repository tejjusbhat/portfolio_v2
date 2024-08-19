import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex justify-center mt-[10%]">
      <div className="w-[85%] flex flex-col text-text leading-none items-center">
        <h2 className="font-bold text-[4rem] tracking-wider text-primary mb-6 ">Let's Connect!</h2>
        <p className="w-2/3 font-normal text-[1.2rem] leading-normal tracking-wide text-center mb-8">
          I'm actively looking for work right now and am skilled in backend development and AI development. 
          If you're interested in working together or just want to say hello, I'd love to hear from you!
        </p>
        <a href="mailto:tejjusbhat@gmail.com">
          <button className="border-[4px] border-primary text-[1.5rem] font-bold text-primary bg-transparent px-6 py-4 mt-12 w-[16rem] transform hover:translate-x-2 hover:scale-110 hover:text-text hover:border-text transition-transform duration-200">Say Hello!</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
