import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSave } from 'react-icons/fa';
import { createProject } from '../../services/projectService';
import Button from '../common/Button';

const ProjectForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    title: '', description: '', techStack: '', category: 'web',
    liveUrl: '', githubUrl: '', featured: false, image: ''
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const data = {
        ...form,
        techStack: form.techStack.split(',').map(s => s.trim()).filter(Boolean)
      };
      await createProject(data);
      toast.success('Project created!');
      setForm({ title: '', description: '', techStack: '', category: 'web', liveUrl: '', githubUrl: '', featured: false, image: '' });
      onSuccess?.();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create project');
    } finally { setSaving(false); }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 'var(--space-xl)' }}>
      <h3 style={{ marginBottom: 'var(--space-lg)' }}>Add New Project</h3>
      <div className="form-group">
        <label>Title *</label>
        <input className="form-input" name="title" value={form.title} onChange={handleChange} required placeholder="Project name" />
      </div>
      <div className="form-group">
        <label>Description *</label>
        <textarea className="form-input" name="description" value={form.description} onChange={handleChange} required placeholder="What does this project do?" />
      </div>
      <div className="form-group">
        <label>Tech Stack (comma-separated)</label>
        <input className="form-input" name="techStack" value={form.techStack} onChange={handleChange} placeholder="React, Node.js, MongoDB" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
        <div className="form-group">
          <label>Category</label>
          <select className="form-input" name="category" value={form.category} onChange={handleChange}>
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
            <option value="ai">AI / ML</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '28px' }}>
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} id="featured" />
          <label htmlFor="featured" style={{ margin: 0 }}>Featured Project</label>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
        <div className="form-group">
          <label>Live URL</label>
          <input className="form-input" name="liveUrl" value={form.liveUrl} onChange={handleChange} placeholder="https://..." />
        </div>
        <div className="form-group">
          <label>GitHub URL</label>
          <input className="form-input" name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="https://github.com/..." />
        </div>
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input className="form-input" name="image" value={form.image} onChange={handleChange} placeholder="https://..." />
      </div>
      <Button type="submit" variant="primary" size="lg" icon={<FaSave />} disabled={saving}>
        {saving ? 'Saving...' : 'Create Project'}
      </Button>
    </form>
  );
};

export default ProjectForm;
