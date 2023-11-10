import FilterDropdown from "../../Components/DropDowns/FilterDropdown";
import SearchSection from "../../Components/SearchSection/SearchSection";
import styles from "./BrowserCompaniesAllJobs.module.css";
import { Companysize } from "../../Data/Options";
import { categories } from "../../Data/Options";
import { useState } from "react";

function BrowserCompaniesAllJobs() {
  const [isDropDown, setisDropDown] = useState(true);
  return (
    <>
      <div className={styles.companiesAllJobsWrapper}>
        <SearchSection>
          <h1>Find your</h1>
          <p>
            Find your next carrer at companies like HubSpot,Nike and Dropbox
          </p>
        </SearchSection>
      </div>
      <section className={styles.jobsSectionWrapper}>
        <div className={styles.optionsSection}>
          <FilterDropdown filterOptions={categories} name={"Industry"} />
          <FilterDropdown filterOptions={Companysize} name={"Company size"} />
        </div>
        <div className={styles.jobListSectionWrapper}>
          <div className={styles.AllJobListSection}>
            <div>
              <h1>All Jobs</h1>
              <p>Showing 8 results</p>
            </div>
            <div>
              <label htmlFor="sortOptions">Sort By:</label>
              <select name="sortOptions" id="sortOptions">
                <option value="mostRelevant">Most Relevant</option>
                <option value="mostLatest">Most Latest</option>
                <option value="notApplies">NotApplied</option>
              </select>
              <div>List View</div>
              <div>Box View</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrowserCompaniesAllJobs;
