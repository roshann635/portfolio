import { PLACEHOLDER_PROJECTS } from '../utils/constants';
import ProjectList from '../components/project/ProjectList';
import useFetch from '../hooks/useFetch';
import Loader from '../components/common/Loader';
import ScrollReveal from '../components/common/ScrollReveal';

const Projects = () => {
  const { data: dbProjects, loading } = useFetch('/projects');
  const projects = dbProjects && dbProjects.length > 0 ? dbProjects : PLACEHOLDER_PROJECTS;

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-3xl))' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-title">
            <h2>Projects</h2>
            <p>A collection of projects I've built</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {loading ? <Loader text="Loading projects..." /> : <ProjectList projects={projects} />}
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Projects;
