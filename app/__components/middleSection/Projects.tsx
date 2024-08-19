import React from 'react'
import Image from 'next/image'
import project1Image from '@/public/images/project1.png'
import project2Image from '@/public/images/project2.png'
import project3Image from '@/public/images/project3.webp'

const Projects = () => {
  const projects = [
    {
      title: 'Captcha Solver',
      description: 'An automated system designed to solve captchas with high accuracy and speed using computer vision and machine learning techniques.',
      technologies: ['Python', 'YOLO', 'OpenCV', 'Flask'],
      image: project1Image,
      link: 'https://github.com/tejjusbhat/captcha_solver',
    },    
    {
      title: 'Secrets Web App',
      description: 'A web application allowing users to register, login, and anonymously share secrets. Built using Node.js, Express.js, and MongoDB, it features secure user authentication via email or Google OAuth 2.0.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'OAuth 2.0'],
      image: project2Image,
      link: 'https://github.com/tejjusbhat/secrets-project',
    },    
    {
      title: 'Chatbot Creation Suite',
      description: 'Created a module using which we can create custom AI chatbots with natural language processing features. This project focused on enhancing user engagement by developing niche-specific functionalities and integrating document interaction capabilities.',
      technologies: ['Python', 'Langchain', 'NLP', 'Web-Scraping'],
      image: project3Image,
      link: 'https://erengy.github.io/under-construction/',
    },    
  ]

  return (
    <div id="projects" className="w-full flex justify-center px-4 md:px-0">
      <div className="w-full md:w-[84%] flex flex-col items-center mt-[10%]">
        <span className="font-bold text-[1.5rem] md:text-[2rem] tracking-wider text-primary mb-12">Projects</span>
        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} group`}
            >
              <div className="w-full md:w-[70%] mb-6 md:mb-0 relative z-0 grayscale hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </a>
              </div>
              <div className={`w-full md:w-[50%] flex flex-col ${index % 2 !== 0 ? 'md:items-start md:ml-8' : 'md:items-end md:mr-8'} z-10`}>
                <span className="font-bold text-[1.3rem] md:text-[1.7rem] text-text mb-4">{project.title}</span>
                <div className={`bg-secondary p-4 md:p-6 text-text ${index % 2 !== 0 ? "text-left" : "text-right"}`}>
                  <span className={`font-normal text-[1rem] md:text-[1.2rem] leading-relaxed ${index % 2 !== 0 ? "mr-0 md:mr-12" : "ml-0 md:ml-12"}`}>
                    {project.description}
                  </span>
                </div>
                <ul className="list-none flex gap-3 flex-wrap mt-4 text-[1rem] md:text-[1.2rem]">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )   
}

export default Projects
