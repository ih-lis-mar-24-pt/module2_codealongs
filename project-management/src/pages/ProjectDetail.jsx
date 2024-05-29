import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  console.log(projectId);

  const getSingleProject = async id => {
    try {
      const response = await axios.get(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${id}?_embed=tasks`
      );
      setProject(response.data);
    } catch (error) {
      console.log('error fetching the project', error);
    }
  };

  useEffect(() => {
    getSingleProject(projectId);
  }, [projectId]);

  return (
    <div>
      <h1>Project Details</h1>
      {!project && <h3>No project found</h3>}

      {project && (
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      )}

      {project &&
        project.tasks.map(task => {
          return (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          );
        })}

      <Link to='/projects'>Back to projects</Link>
    </div>
  );
};

export default ProjectDetail;
