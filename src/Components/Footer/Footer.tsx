import styles from "./Footer.module.css";
import companyLogo from "../../Assets/Jobhuntly.png";
import GeneralButton from "../Buttons/GeneralButton/GeneralButton";
import twitterIcon from "../../Assets/1217163_twitter_icon.png";
import Instagram from "../../Assets/1217174_instagram_icon.png";
import faceBook from "../../Assets/1217141_fb_icon.png";
import LinkedIn from "../../Assets/1217173_linkedin_icon.png";
import Dribble from "../../Assets/dribbble-512.png";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerDetails}>
        <div className={styles.companyLogoandSummary}>
          <div>
            <img
              src={companyLogo}
              alt="CompanyLogo"
              width={"50px"}
              height={"50px"}
            />
            <p>JobHuntly</p>
          </div>
          <p>
            Greate Platform for the Jobseeker that passionate about Dream job
            easier startups.Find your
          </p>
        </div>
        <ul className={styles.footerAboutSection}>
          <li>About</li>
          <li>Companies</li>
          <li>Pricing</li>
          <li>Terms</li>
          <li>Advice</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className={styles.footerResourcesSection}>
          <li>Help Docs</li>
          <li>Guide</li>
          <li>Updates</li>
          <li>Contact Us</li>
        </ul>
        <div className={styles.jobNotifications}>
          <h2>Get Job Notifications</h2>
          <br />
          <p>The Latest Job news,articles,sent to your inbox weekly</p>
          <br />
          <br />
          <input type="text" placeholder="Email Address" />
          <div>
            <GeneralButton fontSize="1.6rem" color="white" bgColor="#4640de">
              Subscribe
            </GeneralButton>
          </div>
        </div>
      </div>
      <div className={styles.socialMedaiLinkSection}>
        <h4>2021@ JobHuntly. All rights reserved</h4>
        <div>
          <img src={twitterIcon} alt="twitterIcon" />
          <img src={Instagram} alt="Instagram" />
          <img src={faceBook} alt="faceBook" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Dribble} alt="Dribble" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
