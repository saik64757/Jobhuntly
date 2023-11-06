import styles from "./JobscardRect.module.css";
import logo from "../../Assets/revolut_logo_icon_248648.svg";
import RoundPill from "../Pills/RoundPill/RoundPill";

function JobsCardRectangle() {
  return (
    <div className={styles.RectjobCardWrapper}>
      <img src={logo} alt="CompanyLogo" width={"30rem"} height={"30rem"} />
      <div className={styles.ReactJobDetailsWrapper}>
        <h3>Social Media Assistant</h3>
        <div>
          <p>Revoult&nbsp;</p>
          <span>&#128900;</span>
          <p>&nbsp;Madrid,Spain</p>
        </div>
        <div className={styles.PillsWrapper}>
          <RoundPill />
          <hr />
          <RoundPill />
          <RoundPill />
        </div>
      </div>
    </div>
  );
}

export default JobsCardRectangle;
