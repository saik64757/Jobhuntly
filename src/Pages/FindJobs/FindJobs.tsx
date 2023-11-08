import FilterDropdown from "../../Components/DropDowns/FilterDropdown";
import SearchSection from "../../Components/SearchSection/SearchSection";
import styles from "./FindJobs.module.css";
import { typeofEmployment } from "../../Data/Options";
import { categories } from "../../Data/Options";
import { Joblevel } from "../../Data/Options";
import { SalaryRange } from "../../Data/Options";
import { jobs } from "../../Data/JobsData";
import JobsCardRectangle from "../../Components/JobscardRect/JobscardRect";
import GeneralButton from "../../Components/Buttons/GeneralButton/GeneralButton";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function FindJobs() {
  return (
    <>
      <div className={styles.findjobsWrapper}>
        <SearchSection>
          <h1>Find your</h1>
          <p>
            Find your next carrer at companies like HubSpot,Nike and Dropbox
          </p>
        </SearchSection>
      </div>

      <section className={styles.allJobsWrapper}>
        <div className={styles.optionsSection}>
          <FilterDropdown
            filterOptions={typeofEmployment}
            name={"Type of Employment"}
          />
          <FilterDropdown filterOptions={categories} name={"Categories"} />
          <FilterDropdown filterOptions={Joblevel} name={"Job Level"} />
          <FilterDropdown filterOptions={SalaryRange} name={"Salary Range"} />
        </div>
        <div className={styles.AllJobListSectionWrapper}>
          <div className={styles.AllJobListSection}>
            <div>
              <h1>All Jobs</h1>
              <p>Showing {jobs.length} results</p>
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
          {}
          <div>
            <JobsCardRectangle cardWidth="100%">
              <GeneralButton btnwidth="18rem" fontSize="2rem">
                Apply
              </GeneralButton>
              <BorderLinearProgress variant="determinate" value={50} />
              <p>5 Applied of 10 Capacity</p>
            </JobsCardRectangle>
          </div>
        </div>
      </section>
    </>
  );
}

export default FindJobs;
