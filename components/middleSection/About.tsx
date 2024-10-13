import Image from 'next/image';
import image1 from '@/public/images/about1.jpg';
import image2 from '@/public/images/about2.jpg';
import image3 from '@/public/images/about3.jpeg';

// Define the JSON data directly within the file
const aboutData = {
  sections: [
    {
      title: "Passionate Coder & Problem Solver",
      content: [
        "I love to code and create solutions. My primary focus is on building AI/ML models and designing APIs that integrate seamlessly with cloud technologies.",
        "Competitive by nature, I'm constantly pushing myself to learn more and refine my skills. I enjoy the challenge of solving complex problems and delivering effective, scalable solutions."
      ],
      image: image1,
      side: "left"
    },
    {
      title: "Career Aspirations",
      content: [
        "Currently, I am looking for internship opportunities with the potential for full-time employment, particularly in the fields of AI/ML, Data Science, or Backend Development.",
        "I'm always eager to learn new technologies and improve my technical capabilities, aiming to make a meaningful impact through my work."
      ],
      image: image2,
      side: "right"
    },
    {
      title: "Anime, Gaming & Beyond",
      content: [
        "When I'm not coding, you'll find me immersed in the world of anime and video games. My favorite anime is Violet Evergarden, and I also enjoy exploring new games that challenge and inspire me.",
        "I love diving into various hobbies that fuel my creativity and curiosity, whether it's doing yoga, learning to juggle, playing the guitar. Chances are if you tell me something I haven't yet tried, I will be trying it soon after."
      ],
      image: image3,
      side: "left"
    }
  ]
};


const About = () => {
  return (
    <div id="about" className="w-full flex justify-center relative">
      <div className="w-full px-[10%] flex flex-col text-text leading-none">
        {/* Rectangle Background */}
        <div className="absolute z-10 h-24 md:h-32 bg-secondary w-full left-0 top-[-10px]" />

        {/* Title */}
        <span className="relative font-bold text-[2rem] md:text-[3rem] tracking-wider text-white mt-8 mb-24 z-20">
          About Me
        </span>
        <br />
        <br />

        {aboutData.sections.map((section, index) => (
          <div
            key={index}
            className={`w-full flex flex-col justify-between md:flex-row items-center mb-32 ${section.side === 'right' ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Content */}
            <div className="md:w-[45%] text-text text-[1.1rem] md:text-[1.2rem] leading-relaxed">
              <h3 className="text-[1.5rem] font-bold mb-4">{section.title}</h3>
              {section.content.map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>

            {/* Image */}
            <div className="md:w-[45%] flex justify-center items-center overflow-hidden max-h-[350px]">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
