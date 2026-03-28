import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaPaperPlane } from 'react-icons/fa';
import { submitContact } from '../../services/contactService';
import Button from '../common/Button';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSending(true);
    try {
      await submitContact(form);
      toast.success('🎮 Message sent! Quest completed!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send message');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form
      className="contact-form glass-card"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-form__header">
        <h3>Send a Message</h3>
        <p>Drop me a line — I'd love to hear from you!</p>
      </div>

      <div className="contact-form__row">
        <div className="form-group">
          <label htmlFor="contact-name">Name *</label>
          <input
            id="contact-name"
            className="form-input"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            className="form-input"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          className="form-input"
          type="text"
          name="subject"
          placeholder="What's this about?"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message *</label>
        <textarea
          id="contact-message"
          className="form-input"
          name="message"
          placeholder="Tell me about your project, idea, or just say hello..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        icon={<FaPaperPlane />}
        disabled={sending}
      >
        {sending ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
