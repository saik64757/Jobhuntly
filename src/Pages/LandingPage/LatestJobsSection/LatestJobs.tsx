import JobsCardRectangle from "../../../Components/JobscardRect/JobscardRect";
import styles from "./LatestJobsSection.module.css";

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
        {newArr.map(() => (
          <JobsCardRectangle />
        ))}
      </div>
    </section>
  );
}

export default LatestJobs;
