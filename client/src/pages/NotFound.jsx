import { Link } from "react-router-dom";
import Button from "../components/common/Button";

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
        <div style={{ textAlign: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="md">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
