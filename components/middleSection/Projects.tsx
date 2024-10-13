import React from 'react'
import Image from 'next/image'
import project1Image from '@/public/images/project1.png'
import project2Image from '@/public/images/project2.png'
import project3Image from '@/public/images/project3.png'
import project4Image from '@/public/images/project4.png'
import project5Image from '@/public/images/project5.webp'

const Projects = () => {
  const projects = [
    {
      title: 'Captcha Solver',
      description: 'It is exactly what the title is... it solves captchas using AI. Pretty cool, using robots to prove that you are not one.',
      technologies: ['Python', 'YOLO', 'OpenCV', 'Flask'],
      image: project1Image,
      link: '/solve-captcha',
    },
    {
      title: 'Diamond Price Predictor',
      description: 'A machine learning model that predicts the price of diamonds, implements ensemble learning, hyperparameter optimization and pipelining.',
      technologies: ['Scikit-learn', 'Pandas', 'ML', 'Python'],
      image: project2Image,
      link: 'https://github.com/tejjusbhat/diamond_price_prediction',
    },
    {
      title: 'Ivy- An Emotional AI Assistant',
      description: 'It is a work in progress voice assistant that talks to you as if its a human, it can detect your emotions and respond accordingly.',
      technologies: ['Python', 'Langchain', 'NLP', 'GCP'],
      image: project3Image,
      link: 'https://github.com/tejjusbhat/Ivy-emotion-detector',
    },
    {
      title: 'Secrets Web App',
      description: 'This is an old project to show that even tho it looks like I have moved on to AI, I still am capable of doing full stack development.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'OAuth 2.0'],
      image: project4Image,
      link: 'https://github.com/tejjusbhat/secrets-project',
    },
    {
      title: 'Stock Investment Assistant',
      description: 'An API that scrapes the web for latest news on stocks and gives you a sentiment analysis of the news to help you make better investment decisions.',
      technologies: ['NLP', 'Langchain', 'Python', 'Web-Scraping'],
      image: project5Image,
      link: 'https://github.com/tejjusbhat/stock_invest_assistant',
    },
  ]

  return (
    <div id="projects" className="w-full flex justify-center relative">
      <div className="w-full px-[10%] flex flex-col text-text leading-none">
        {/* Rectangle Background */}
        <div className="absolute z-10 h-24 md:h-32 bg-secondary w-full left-0 top-[-10px]" />

        {/* Title */}
        <span className="relative font-bold text-[2rem] md:text-[3rem] tracking-wider text-white mt-8 mb-24 z-20">
          My Work
        </span>

        {/* Projects Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-20">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-primary p-4 rounded-lg shadow-md flex flex-col items-center">
                <Image src={project.image} alt={project.title} className="w-full h-auto max-h-[200px] rounded-md" />
                <h3 className="font-semibold text-lg mt-4 text-center">{project.title}</h3>
                <p className="text-sm mt-2 text-center">{project.description}</p>
                <div className="flex gap-2 mt-4 flex-wrap justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
