import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  PROFILE,
  PLACEHOLDER_EDUCATION,
  PLACEHOLDER_EXPERIENCES,
} from "../../utils/constants";
import Button from "./Button";
import "./ProfileModal.css";

const ProfileModal = ({ isOpen, onClose }) => {
  const edu = PLACEHOLDER_EDUCATION[0];
  const exp = PLACEHOLDER_EXPERIENCES[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="profile-modal"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="profile-modal__card"
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="profile-modal__header">
              <div className="profile-modal__badge-group">
                <span className="profile-modal__badge">
                  DOSSIER // IDENTITY
                </span>
                <span className="profile-modal__verified">
                  VERIFIED CSE 2024–2028
                </span>
              </div>
              <button
                className="profile-modal__close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Content Body */}
            <div className="profile-modal__body">
              {/* Photo Column */}
              <div className="profile-modal__photo-col">
                <div className="profile-modal__photo-frame">
                  <img
                    src={PROFILE.avatar || "/photo.jpg"}
                    alt={PROFILE.name}
                    className="profile-modal__photo"
                  />
                  <div className="profile-modal__photo-stamp">
                    OFFICIAL RECORD
                  </div>
                </div>
                <div className="profile-modal__contact-list">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="profile-modal__contact-item"
                  >
                    <FaEnvelope /> {PROFILE.email}
                  </a>
                  <a
                    href={`tel:${PROFILE.mobile}`}
                    className="profile-modal__contact-item"
                  >
                    <FaPhone /> {PROFILE.mobile}
                  </a>
                  <a
                    href={PROFILE.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-modal__contact-item"
                  >
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                  <span className="profile-modal__contact-item">
                    <FaMapMarkerAlt /> {PROFILE.location}
                  </span>
                </div>
              </div>

              {/* Info Column */}
              <div className="profile-modal__info-col">
                <div className="profile-modal__main-info">
                  <h2 className="profile-modal__name">{PROFILE.name}</h2>
                  <p className="profile-modal__tagline">{PROFILE.tagline}</p>
                  <p className="profile-modal__bio">{PROFILE.bio}</p>
                </div>

                <div className="profile-modal__grid">
                  <div className="profile-modal__section">
                    <h4 className="profile-modal__section-title">
                      <FaGraduationCap /> Education & Academic Record
                    </h4>
                    <p className="profile-modal__detail-primary">
                      {edu?.degree}
                    </p>
                    <p className="profile-modal__detail-sub">
                      {edu?.institution}
                    </p>
                    <p className="profile-modal__detail-highlight">
                      Grade: <strong>{edu?.grade}</strong>
                      {edu?.startYear && edu?.endYear
                        ? ` · ${edu.startYear} — ${edu.endYear}`
                        : ""}
                    </p>
                  </div>

                  <div className="profile-modal__section">
                    <h4 className="profile-modal__section-title">
                      <FaBriefcase /> Current Industry Internship
                    </h4>
                    <p className="profile-modal__detail-primary">{exp?.role}</p>
                    <p className="profile-modal__detail-sub">
                      {exp?.company} · {exp?.startDate} — {exp?.endDate}
                    </p>
                    <p className="profile-modal__detail-desc">
                      {exp?.description}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="profile-modal__actions">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<FaDownload />}
                    href="/Roshan-Jadhav-Resume.pdf"
                  >
                    Download Resume
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<FaGithub />}
                    href={PROFILE.socials.github}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<FaLinkedin />}
                    href={PROFILE.socials.linkedin}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<FaWhatsapp />}
                    href={PROFILE.socials.whatsapp}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<SiLeetcode />}
                    href={PROFILE.socials.leetcode}
                  >
                    LeetCode
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
