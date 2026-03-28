import API from './api';

export const submitContact = (data) => API.post('/contacts', data);
export const getContacts = () => API.get('/contacts');
export const markAsRead = (id) => API.put(`/contacts/${id}/read`);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);
