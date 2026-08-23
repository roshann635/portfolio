import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ContactForm from '../components/contact/ContactForm';
import { PROFILE } from '../utils/constants';
import ScrollReveal from '../components/common/ScrollReveal';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { icon: <FaPhone />, label: 'Phone', value: PROFILE.mobile, href: `tel:${PROFILE.mobile}` },
    { icon: <FaEnvelope />, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: PROFILE.location, href: null },
  ];

  const socials = [
    { icon: <FaGithub />, url: PROFILE.socials.github, label: 'GitHub' },
    { icon: <FaLinkedin />, url: PROFILE.socials.linkedin, label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: PROFILE.socials.leetcode, label: 'LeetCode' },
    { icon: <FaEnvelope />, url: `mailto:${PROFILE.email}`, label: 'Email' },
  ];

  return (
    <div className="contact-page section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-3xl))' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-title">
            <h2>Contact</h2>
            <p>Have a project in mind? Let's talk.</p>
          </div>
        </ScrollReveal>

        <div className="contact-page__grid">
          <ScrollReveal>
            <div className="contact-page__info">
              <div className="contact-page__details">
                <h3>Let's Connect</h3>
                <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

                <div className="contact-page__info-list">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="contact-page__info-item">
                      <div className="contact-page__info-icon">{item.icon}</div>
                      <div>
                        <span className="contact-page__info-label">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="contact-page__info-value">{item.value}</a>
                        ) : (
                          <span className="contact-page__info-value">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-page__socials">
                  <h4>Find me online</h4>
                  <div className="contact-page__social-links">
                    {socials.map((s) => (
                      <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-page__social-link" aria-label={s.label}>
                        {s.icon}
                        <span>{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
