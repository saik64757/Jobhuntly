import styles from "./JobscardSqr.module.css";
import logo from "../../Assets/revolut_logo_icon_248648.svg";
import SquarePill from "../Pills/SquarePill/SquarePill";
import RoundPill from "../Pills/RoundPill/RoundPill";

function JobsCardSquare() {
  return (
    <div className={styles.SquarejobCardWrapper}>
      <div className={styles.headWrapper}>
        <img src={logo} alt="CompanyLogo" width={"20rem"} height={"20rem"} />
        <SquarePill />
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
        <RoundPill />
        <RoundPill />
      </div>
    </div>
  );
}

export default JobsCardSquare;
