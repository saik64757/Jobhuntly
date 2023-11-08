import styles from "./JobscardRect.module.css";
import logo from "../../Assets/revolut_logo_icon_248648.svg";
import RoundPill from "../Pills/RoundPill/RoundPill";

interface JobsCardRectangleprops {
  cardWidth?: string;
  children?: React.ReactNode;
}

function JobsCardRectangle({ cardWidth, children }: JobsCardRectangleprops) {
  return (
    <div
      className={styles.RectjobCardWrapper}
      style={{
        width: cardWidth,
      }}
    >
      <div className={styles.ReactJobDetailsWrapper}>
        <img
          className={styles.JobDetailscompanyLogo}
          src={logo}
          alt="CompanyLogo"
          width={"40rem"}
          height={"40rem"}
        />
        <h3>Social Media Assistant</h3>
        <div>
          <p>Revoult&nbsp;</p>
          <span>&#128900;</span>
          <p>&nbsp;Madrid,Spain</p>
        </div>
        <div className={styles.PillsWrapper}>
          <RoundPill color="#1de760" bgColor="#e1f7e8">
            Full Time
          </RoundPill>
          <hr />
          <RoundPill color="#e4600e" bgColor="#efd5c5">
            Marketing
          </RoundPill>
          <RoundPill color="#0c5ce1" bgColor="#b8cbec">
            Design
          </RoundPill>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>{children}</div>
    </div>
  );
}

export default JobsCardRectangle;
