import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FeaturedJobs from "./FeaturedJobsSection/FeaturedJobs";
import HeroSection from "./HeroSection/HeroSection";
import Styles from "./LandingPage.module.css";
import LatestJobs from "./LatestJobsSection/LatestJobs";

function LandingPage() {
  return (
    <>
      <div className={Styles.landingPageWrapper}>
        <Header />
        <HeroSection />
        <FeaturedJobs />
        <LatestJobs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
