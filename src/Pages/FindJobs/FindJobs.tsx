import FilterDropdown from "../../Components/DropDowns/FilterDropdown";
import SearchSection from "../../Components/SearchSection/SearchSection";
import styles from "./FindJobs.module.css";

function FindJobs() {
  return (
    <div className={styles.findjobsWrapper}>
      <SearchSection>
        <h1>Find your</h1>
        <p>Find your next carrer at companies like HubSpot,Nike and Dropbox</p>
      </SearchSection>
      <section className={styles.allJobsWrapper}>
        <FilterDropdown />
      </section>
    </div>
  );
}

export default FindJobs;
