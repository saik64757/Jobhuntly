import JobsCardSquare from "../../../Components/JobscardSqr/JobscardSqr";
import styles from "./FeaturedJobs.module.css";

function FeaturedJobs() {
  let newArr = Array.from({ length: 8 }, (idx) => 0);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.sectionHeader}>Featured</h2>
        <p>
          show all jobs <span>&#129122;</span>
        </p>
      </div>
      <div className={styles.featuredJobCardsWrapper}>
        {newArr.map(() => (
          <JobsCardSquare isCompanies={false} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;
