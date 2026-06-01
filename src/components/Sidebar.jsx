import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>AI Hiring</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/candidate-dashboard">Dashboard</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/resume-upload">Resume</Link></li>
        <li><Link to="/interview">Interview</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;