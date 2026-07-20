import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navBar";
import HeroSection from "./components/heroSection";
import BrowseByIndustry from "./components/BrowseByIndustry";
import FuturePathProcess from "./components/FuturePathProcess";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/footer";
import TopHiringCompanies from "./components/TopHiringCompanies";

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;