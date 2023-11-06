import FeaturedJobs from "./FeaturedJobsSection/FeaturedJobs";
import HeroSection from "./HeroSection/HeroSection";
import Styles from "./LandingPage.module.css";
import LatestJobs from "./LatestJobsSection/LatestJobs";

function LandingPage() {
  return (
    <>
      <div className={Styles.landingPageWrapper}>
        <HeroSection />
        <FeaturedJobs />
        <LatestJobs />
      </div>
    </>
  );
}

export default LandingPage;
