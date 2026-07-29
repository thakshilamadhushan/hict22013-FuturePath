import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar";
import HeroSection from "./components/heroSection";
import BrowseByIndustry from "./components/BrowseByIndustry";
import FuturePathProcess from "./components/FuturePathProcess";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/footer";
import TopHiringCompanies from "./pages/TopHiringCompanies";
import FindJobs from "./pages/findJobs";
import About from "./pages/about";
import Contact from "./pages/contact";
import ProtectedRoute from "./components/ProtectedRoute";
import JobSeekerDashboard from "./pages/jobSeeker/jobseekerDashboard";
import EmployeeDashboard from "./pages/employee/EmployerDashboard";

function Home() {
  return (
    <>
      <HeroSection />
      <BrowseByIndustry />
      <FuturePathProcess />
      <FeedbackSection />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<TopHiringCompanies />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/jobseeker" element={<ProtectedRoute role={"jobseeker"}> <JobSeekerDashboard/> </ProtectedRoute>}/>
        <Route path="/employer" element={<ProtectedRoute role={"employer"}> <EmployeeDashboard/> </ProtectedRoute>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
