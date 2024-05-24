import { useParams, Link } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { projectId } = useParams();
  console.log(projectId);

  // find returns the first element matching the condition.
  // returns null if no element is found.                 // comes from useParams()
  const foundProject = projects.find(project => project._id === projectId);

  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>No project found</h3>}

      {foundProject && (
        <div>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
        </div>
      )}

      <Link to='/projects'>Back to projects</Link>
    </div>
  );
};

export default ProjectDetail;
