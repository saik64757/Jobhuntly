import styles from "./Header.module.css";
import logo from "../../Assets/Jobhuntly.png";
import GeneralButton from "../Buttons/GeneralButton/GeneralButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerWrapperSection1}>
        <img src={logo} alt="Company Logo" />

        <h1>Job Huntly</h1>

        <Link to={"/findjobs"}>
          <h3>Find Jobs</h3>
        </Link>
        <Link to={"/browserCompanies"}>
          <h3>Browser Companies</h3>
        </Link>
      </div>
      <div className={styles.headerWrapperSection2}>
        <GeneralButton fontSize="1.6rem" color="#4640de" bgColor="white">
          Login
        </GeneralButton>
        <hr />
        <GeneralButton fontSize="1.6rem" color="white" bgColor="#4640de">
          Sign Up
        </GeneralButton>
      </div>
    </div>
  );
}

export default Header;
