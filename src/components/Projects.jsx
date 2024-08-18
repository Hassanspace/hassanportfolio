import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsData from '../assets/list.json'; // Import the projects data

const Projects = () => {
  const [activeTab, setActiveTab] = useState('html-css-js');

  // Filter projects based on the selected tab
  const filterProjects = (category) => {
    return projectsData.filter(project => project.category === category);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex mb-6 border border-blue-700 rounded-lg p-3">
        <button
          className={`py-2 px-4 text-xs md:text-sm font-medium transition-colors duration-300 ${activeTab === 'html-css-js' ? 'border-b-2 rounded-lg border-blue-500 text-white bg-blue-700' : 'text-white hover:text-blue-500'}`}
          onClick={() => handleTabClick('html-css-js')}
        >
          HTML - CSS - JS
        </button>
        <button
          className={`py-2 px-4 text-xs md:text-sm font-medium transition-colors duration-300 ${activeTab === 'react-tailwind' ? 'border-b-2 rounded-lg border-blue-500 text-white bg-blue-700' : 'text-white hover:text-blue-500'}`}
          onClick={() => handleTabClick('react-tailwind')}
        >
          React - Tailwind
        </button>
        <button
          className={`py-2 px-4 text-xs md:text-sm font-medium transition-colors duration-300 ${activeTab === 'mern' ? 'border-b-2 rounded-lg border-blue-500 text-white bg-blue-700' : 'text-white hover:text-blue-500'}`}
          onClick={() => handleTabClick('mern')}
        >
          MERN Stack
        </button>
      </div>

      {/* Tab Content */}
      {activeTab && (
        <div className=" w-full flex flex-wrap justify-center  bg-transparent backdrop-blur-sm bg-opacity-30 shadow-md rounded-lg">
          
            {filterProjects(activeTab).map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                name={project.name}
                live={project.live}
                description={project.description}
                codeLink={project.codeLink}
                liveDemoLink={project.liveDemoLink}
                date={project.date}
                technologies={project.technologies}
              />
            ))}
         
        </div>
      )}
    </div>
  );
};

export default Projects;
