import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import CandidateDashboard from "../pages/CandidateDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import Interview from "../pages/Interview";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/candidate-dashboard"element={<CandidateDashboard />}/>

      <Route path="/recruiter-dashboard"element={<RecruiterDashboard />}/>
      <Route path="/interview"element={<Interview />}/>
    </Routes>
  );
}






export default AppRoutes;