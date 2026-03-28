import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import ContactForm from "../components/contact/ContactForm";
import { PROFILE } from "../utils/constants";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: PROFILE.location,
      href: null,
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/roshann635",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/roshan-jadhav-100410339",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/roshann_635",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=roshanjadhav4385@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div
      className="contact-page section"
      style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have a quest for me? Let's talk!</p>
        </div>

        <div className="contact-page__grid">
          <div className="contact-page__info">
            <motion.div
              className="contact-page__details glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="contact-page__info-list">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact-page__info-item">
                    <div className="contact-page__info-icon">{item.icon}</div>
                    <div>
                      <span className="contact-page__info-label">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="contact-page__info-value"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-page__info-value">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-page__socials">
                <h4>Find me online</h4>
                <div className="contact-page__social-links">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-page__social-link"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
