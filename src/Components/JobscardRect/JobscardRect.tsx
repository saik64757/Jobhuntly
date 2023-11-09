import styles from "./JobscardRect.module.css";
import logo from "../../Assets/revolut_logo_icon_248648.svg";
import RoundPill from "../Pills/RoundPill/RoundPill";

interface JobsCardRectangleprops {
  cardWidth?: string;
  newData?: {
    id: number;
    title: string;
    description: string;
    employment_type: string;
    company: string;
    location: string;
  };
  children?: React.ReactNode;
}

function JobsCardRectangle({
  cardWidth,
  children,
  newData,
}: JobsCardRectangleprops) {
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
        <h3>{newData?.title}</h3>
        <div>
          <p>{newData?.company}&nbsp;</p>
          <span>&#128900;</span>
          <p>&nbsp;{newData?.location}</p>
        </div>
        <div className={styles.PillsWrapper}>
          <RoundPill color="#1de760" bgColor="#e1f7e8">
            {newData?.employment_type}
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
