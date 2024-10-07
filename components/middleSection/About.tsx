import React from 'react';

// Define the JSON data directly within the file
const aboutData = {
  title: "About Me",
  description: [
    "I am Tejjus Bhat, a software engineer and AI enthusiast who loves solving problems and taking on new challenges. I have a strong foundation in Python, JavaScript, and some basic knowledge of Rust, and I’ve worked on projects ranging from VR training simulators to AI-powered chatbots.",
    "Currently, I am looking for internship opportunities with potential for full-time employment in the field of AI/ML, Data Science, or Full Stack Development. I am open to learning new technologies and frameworks and I am always looking to improve my skills.",
    "When I am not coding, you can find me playing video games, watching anime, or reading manga. I love to listen to music of various genres.",
    "The following are my technical skills:"
  ],
  skills: {
    "Languages": ["Python", "JavaScript", "C#", "TypeScript", "Rust"],
    "Concepts": ["AI/ML", "Data Science", "NLP", "Generative AI", "REST API", "Git", "Linux", "CI/CD"],
    "Frameworks and Libraries": ["React.js", "Next.js", "Flask", "Pytorch", "OpenCV", "Tensorflow"],
    "Databases": ["MySQL", "MongoDB", "Convex"],
    "Software": ["Unity", "Photoshop", "After Effects"]
  }
};

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center px-4 md:px-0 relative">
      <div className="w-full flex flex-col items-center ">
        
        {/* Title Section */}
        <div className="relative w-full mb-8 flex flex-col text-text leading-none">
          {/* Rectangle Background */}
          <div className="absolute z-10 h-32 bg-secondary transform -translate-y-2 w-full" />
          
          {/* Title */}
          <span className="relative font-bold text-[2rem] md:text-[3rem] tracking-wider text-white my-8 mx-[7%] z-20">
            {aboutData.title}
          </span>
        </div>

        {/* Description and Skills */}
        <div className="relative w-full flex flex-col text-text leading-relaxed">
          {aboutData.description.map((paragraph, index) => (
            <p key={index} className="font-normal text-[1.1rem] md:text-[1.2rem] mb-4 mx-[7%]">
              {paragraph}
            </p>
          ))}

          <ul className="list-disc text-[1.1rem] md:text-[1.2rem] list-inside mt-4 mx-[7%] space-y-3">
            {Object.entries(aboutData.skills).map(([skillCategory, skills], index) => (
              <li key={index}>
                <strong>{skillCategory}:</strong> {skills.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
