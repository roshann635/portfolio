import API from './api';

export const getProjects = () => API.get('/projects');
export const getFeaturedProjects = () => API.get('/projects/featured');
export const getProject = (id) => API.get(`/projects/${id}`);
export const createProject = (data) => API.post('/projects', data);
export const updateProject = (id, data) => API.put(`/projects/${id}`, data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
