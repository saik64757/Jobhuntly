import Footer from "../../Components/Footer/Footer";
import FeaturedJobs from "./FeaturedJobsSection/FeaturedJobs";
import Styles from "./LandingPage.module.css";
import LatestJobs from "./LatestJobsSection/LatestJobs";

function LandingPage() {
  return (
    <>
      <div className={Styles.landingPageWrapper}>
        <FeaturedJobs />
        <LatestJobs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
