import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar";
import HeroSection from "./components/heroSection";
import BrowseByIndustry from "./components/BrowseByIndustry";
import FuturePathProcess from "./components/FuturePathProcess";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/footer";
import TopHiringCompanies from "./components/TopHiringCompanies";
import FindJobs from "./pages/findJobs";

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

        <Route
          path="/companies"
          element={<TopHiringCompanies />}
        />

        <Route path="/findjobs" element={<FindJobs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;