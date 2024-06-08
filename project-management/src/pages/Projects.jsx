import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5005/characters');
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log('error fetching the projects', error);
    }
  };

  useEffect(() => {
    console.log('useEffect: Mounting');
    getProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <Link to='/projects/new'>
        <button>Add a new project</button>
      </Link>
      {projects.map(project => {
        return (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h2>{project.title}</h2>
            </Link>
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
