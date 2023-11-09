import JobsCardRectangle from "../../../Components/JobscardRect/JobscardRect";
import styles from "./LatestJobsSection.module.css";
import { jobs } from "../../../Data/JobsData";

function LatestJobs() {
  let newArr = Array.from({ length: 6 }, (idx) => 0);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.sectionHeader}>Latest</h2>
        <p>
          show all jobs <span>&#129122;</span>
        </p>
      </div>
      <div className={styles.featuredJobCardsWrapper}>
        {(jobs as unknown as any[]).slice(0, 6).map((ele) => (
          <JobsCardRectangle newData={ele} />
        ))}
      </div>
    </section>
  );
}

export default LatestJobs;
