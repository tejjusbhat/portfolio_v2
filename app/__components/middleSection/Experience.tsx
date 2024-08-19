"use client"
import React, { useState } from 'react';

const experiences = [
  {
    company: 'INMAS (DRDO)',
    title: 'Trainee Apprentice',
    period: 'July 2024 - present',
    description: [
      'Developing a VR CBRNe Drone Training Simulator to create immersive training scenarios, projected to reduce training costs by 12%.',
      'Working with scientists and researchers to develop environments for drone modules and deliver timely reports and presentations.',
      'Integrating data collection modules for collection of data for writing research papers and to contribute to ongoing research.',
      'Adding eye-tracking technology to monitor user engagement and stress, supporting research into stress impacts on decision-making.',
    ],
  },  
  {
    company: 'kareai.io',
    title: 'Associate Researcher (Data Science)',
    period: 'Feb 2024 - June 2024',
    description: [
      'Designed and implemented a user-friendly Chatbot interface, utilizing user feedback to iterate designs, resulting in over 1,000 early users.',
      'Enhanced data visualization by implementing React-charts for interactive graphs, improving user engagement and data insight clarity for over 200 users.',
      'Spearheaded development of features for PDF conversation and data insights, leveraging natural language processing (NLP) to secure 2 major clients.',
    ],
  },  
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <div id="experience" className="w-full flex justify-center px-4 md:px-0">
      <div className="w-full md:w-[84%] flex flex-col items-start mt-[10%]">
        <span className="font-bold text-[1.5rem] md:text-[2rem] tracking-wider text-primary mb-6">Experience</span>

        <div className="w-full flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/5 flex flex-row md:flex-col space-y-0 md:space-y-4 mb-4 md:mb-0">
            {experiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(index)}
                className={`text-left text-[1rem] md:text-[1.2rem] cursor-pointer transition-colors duration-200 ease-in-out w-full md:w-auto ${
                  selectedExperience === index
                    ? 'text-primary font-bold'
                    : 'text-text hover:text-primary'
                }`}
              >
                {experience.company}
              </button>
            ))}
          </div>

          <div className="w-full md:w-4/5 flex flex-col border-2 border-primary p-4 md:p-8 rounded-lg">
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-primary mb-2">
              {experiences[selectedExperience].title}
            </h2>
            <h2 className="text-[1.1rem] md:text-[1.3rem] font-bold text-text mb-4">
              {"@" + experiences[selectedExperience].company}
            </h2>
            <h3 className="text-[1rem] md:text-[1.2rem] text-text mb-6">
              {experiences[selectedExperience].period}
            </h3>
            <ul className="list-disc list-inside text-[1rem] md:text-[1.2rem] text-text leading-relaxed space-y-4">
              {experiences[selectedExperience].description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
