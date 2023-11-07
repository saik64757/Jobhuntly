import styles from "./Header.module.css";
import logo from "../../Assets/Jobhuntly.png";
import GeneralButton from "../Buttons/GeneralButton/GeneralButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

function Header() {
  const [selected, setSelected] = useState(null);

  // function handleSelected(e: { target: { value: any } }) {
  //   console.log(e.target.value);
  // }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerWrapperSection1}>
        <img src={logo} alt="Company Logo" />
        <h1>Job Huntly</h1>
        <Link to={"/findjobs"}>
          <h3 className={styles.selectedoption}>Find Jobs</h3>
        </Link>
        <Link to={"/browserCompanies"}>
          <h3 className={styles.selectedoption}>Browser Companies</h3>
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
