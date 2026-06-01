import DashboardLayout from "../components/DashboardLayout";

function CandidateDashboard() {
    return (
      <div>

    <DashboardLayout>
      <h2>Candidate Dashboard</h2>
      <p>Welcome Candidate</p>
    </DashboardLayout>

        <h2>Candidate Dashboard</h2>
  
        <div>
          <h3>Applied Jobs</h3>
          <p>5 Jobs Applied</p>
        </div>
  
        <div>
          <h3>Interview Score</h3>
          <p>85%</p>
        </div>
  
        <div>
          <h3>Resume Status</h3>
          <p>Uploaded</p>
        </div>
      </div>
    );
  }
  
  export default CandidateDashboard;