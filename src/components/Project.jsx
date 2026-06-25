import React from 'react';

const Projects = () => {
  const myProjects = [
    { title: "E-Commerce Web App", description: "Built with React and Tailwind CSS.", link: "#" },
    { title: "Weather Dashboard", description: "Fetches live data from a weather API.", link: "#" },
  ];

  return (
    <section id="projects" style={{ padding: '4rem 2rem' }}>
      <h2 style={{ textAlign: 'center' }}>My Projects</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '2rem' }}>
        {myProjects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1.5rem', borderRadius: '8px', width: '250px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;