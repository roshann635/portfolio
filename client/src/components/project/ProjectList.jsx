import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECT_CATEGORIES } from '../../utils/constants';
import './ProjectList.css';

const ProjectList = ({ projects = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="project-list">
      <div className="project-list__filters">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`project-list__filter ${activeCategory === cat.key ? 'project-list__filter--active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
            {activeCategory === cat.key && (
              <motion.div className="project-list__filter-indicator" layoutId="filter-indicator" />
            )}
          </button>
        ))}
      </div>

      <motion.div className="project-list__grid" layout>
        {filtered.map((project, i) => (
          <ProjectCard key={project._id} project={project} index={i} />
        ))}
        {filtered.length === 0 && (
          <div className="project-list__empty">
            <span>🔍</span>
            <p>No quests found in this category.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectList;
