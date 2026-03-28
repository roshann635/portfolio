import { PLACEHOLDER_PROJECTS } from '../utils/constants';
import ProjectList from '../components/project/ProjectList';
import useFetch from '../hooks/useFetch';
import Loader from '../components/common/Loader';

const Projects = () => {
  const { data: dbProjects, loading } = useFetch('/projects');
  const projects = dbProjects && dbProjects.length > 0 ? dbProjects : PLACEHOLDER_PROJECTS;

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-3xl))' }}>
      <div className="container">
        <div className="section-title">
          <h2>Quest Board</h2>
          <p>Browse all my completed and ongoing adventures</p>
        </div>
        {loading ? <Loader text="Loading quests..." /> : <ProjectList projects={projects} />}
      </div>
    </div>
  );
};

export default Projects;
