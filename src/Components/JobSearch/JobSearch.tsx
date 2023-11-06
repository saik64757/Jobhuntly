import GeneralButton from "../Buttons/GeneralButton/GeneralButton";
import styles from "./JobSearch.module.css";
import searchIcon from "../../Assets/search-13-512.png";
import locationIcon from "../../Assets/map-marker-2-512.png";

function JobSearch() {
  return (
    <form className={styles.Searchformwrapper}>
      <div>
        <img src={searchIcon} width={"20rem"} alt="" />{" "}
        <input type="text" placeholder="Job title or keyword" />
      </div>
      <div>
        <img src={locationIcon} width={"20rem"} alt="" />
        <select name="" id="">
          <option value="">Florance,Italy</option>
        </select>
      </div>

      <GeneralButton color="">Search my job</GeneralButton>
    </form>
  );
}

export default JobSearch;
