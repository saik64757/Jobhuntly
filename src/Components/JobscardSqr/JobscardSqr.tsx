import styles from "./JobscardSqr.module.css";
import logo from "../../Assets/revolut_logo_icon_248648.svg";
import SquarePill from "../Pills/SquarePill/SquarePill";
import RoundPill from "../Pills/RoundPill/RoundPill";

interface jobsquareCard {
  isCompanies: boolean;
  children?: React.ReactNode;
  cardWidth?: string;
  cardHeight?: string;
}

function JobsCardSquare({
  isCompanies,
  children,
  cardHeight,
  cardWidth,
}: jobsquareCard) {
  return (
    <div
      className={styles.SquarejobCardWrapper}
      style={{
        maxWidth: cardWidth,
        height: cardHeight,
      }}
    >
      <div className={styles.headWrapper}>
        <img src={logo} alt="CompanyLogo" width={"25rem"} height={"25rem"} />
        {isCompanies ? (
          <div className={styles.numberofJobs}>3 Jobs</div>
        ) : (
          <SquarePill />
        )}
      </div>
      <div className={styles.JobDetails}>
        <h3>Email Marketing</h3>
        <div>
          <p>Revoult&nbsp;</p>
          <span>&#128900;</span>
          <p>&nbsp;Madrid,Spain</p>
        </div>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
      <div>
        <RoundPill color="#FF5733" bgColor="#FBCEB1">
          Marketing
        </RoundPill>
        {isCompanies ? null : (
          <RoundPill color="#00308F" bgColor="#F0F8FF">
            Sales
          </RoundPill>
        )}
      </div>
    </div>
  );
}

export default JobsCardSquare;
