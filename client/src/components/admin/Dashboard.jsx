import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaEnvelope,
  FaChartBar,
  FaEye,
  FaTrash,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { deleteContact, markAsRead } from "../../services/contactService";
import { deleteProject } from "../../services/projectService";
import { toast } from "react-toastify";
import "./Dashboard.css";

const Dashboard = () => {
  const {
    data: projects,
    loading: pLoading,
    refetch: refetchProjects,
  } = useFetch("/projects");
  const {
    data: contacts,
    loading: cLoading,
    refetch: refetchContacts,
  } = useFetch("/contacts");

  const stats = [
    {
      label: "Total Projects",
      value: projects?.length || 0,
      icon: <FaProjectDiagram />,
      color: "var(--accent-primary)",
    },
    {
      label: "Messages",
      value: contacts?.length || 0,
      icon: <FaEnvelope />,
      color: "var(--accent-secondary)",
    },
    {
      label: "Unread",
      value: contacts?.filter((c) => !c.read).length || 0,
      icon: <FaChartBar />,
      color: "var(--accent-tertiary)",
    },
  ];

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await deleteProject(id);
      toast.success("Project deleted");
      refetchProjects();
    } catch {
      toast.error("Failed to delete project");
    }
  };

  const handleMarkRead = async (id) => {
    try {
      await markAsRead(id);
      refetchContacts();
    } catch {
      toast.error("Failed to update");
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await deleteContact(id);
      toast.success("Message deleted");
      refetchContacts();
    } catch {
      toast.error("Failed to delete");
    }
  };

  if (pLoading || cLoading) return <Loader text="Loading dashboard..." />;

  return (
    <div className="dashboard">
      <div className="dashboard__stats">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="dashboard__stat glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="dashboard__stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dashboard__section">
        <h3>📬 Recent Messages</h3>
        <div className="dashboard__messages">
          {contacts && contacts.length > 0 ? (
            contacts.slice(0, 10).map((msg) => (
              <div
                key={msg._id}
                className={`dashboard__message glass-card ${!msg.read ? "dashboard__message--unread" : ""}`}
              >
                <div className="dashboard__message-info">
                  <strong>{msg.name}</strong>
                  <span>{msg.email}</span>
                  <p>{msg.subject || "No Subject"}</p>
                  <p className="dashboard__message-body">{msg.message}</p>
                </div>
                <div className="dashboard__message-actions">
                  {!msg.read && (
                    <button
                      onClick={() => handleMarkRead(msg._id)}
                      title="Mark as read"
                    >
                      <FaEye />
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteContact(msg._id)}
                    title="Delete"
                    className="danger"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="dashboard__empty">No messages yet.</p>
          )}
        </div>
      </div>

      <div className="dashboard__section">
        <h3>🚀 Projects</h3>
        <div className="dashboard__projects">
          {projects && projects.length > 0 ? (
            projects.map((p) => (
              <div key={p._id} className="dashboard__project glass-card">
                <div>
                  <strong>{p.title}</strong>
                  <span className="badge" style={{ marginLeft: "8px" }}>
                    {p.category}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteProject(p._id)}
                  className="danger"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <p className="dashboard__empty">No projects yet. Add some!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
