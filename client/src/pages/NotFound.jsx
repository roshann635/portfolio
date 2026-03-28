import { Link } from "react-router-dom";
import "./About.css";

const NotFound = () => {
  return (
    <div
      className="section"
      style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>404 - Page Not Found</h2>
          <p>The route you requested does not exist. Try going back home.</p>
        </div>
        <Link to="/" className="button button--primary">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
