const Projects = ({ projects }) => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => {
        return (
          <div key={project._id}>
            <h2>{project.name}</h2>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
