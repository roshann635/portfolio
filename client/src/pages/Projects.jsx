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
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <div className="section-title">
            <h2>Quest Board</h2>
            <p>Browse all my completed and ongoing adventures</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} delay={0.15}>
          {loading ? <Loader text="Loading quests..." /> : <ProjectList projects={projects} />}
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Projects;
