import GeneralButton from "../Buttons/GeneralButton/GeneralButton";
import styles from "./JobSearch.module.css";
import searchIcon from "../../Assets/search-13-512.png";
import locationIcon from "../../Assets/map-marker-2-512.png";
import clsx from "clsx";

interface searchbar {
  fullWidth?: boolean;
  children?: React.ReactNode;
}

function JobSearch({ fullWidth, children }: searchbar) {
  return (
    <form
      className={clsx(styles.Searchformwrapper)}
      style={{
        width: fullWidth ? "100%" : "50%",
        justifyContent: fullWidth ? "space-around" : "space-between",
        height: fullWidth ? "8rem" : "auto",
      }}
    >
      <div>
        <img src={searchIcon} width={"20rem"} alt="" />
        <input
          type="text"
          placeholder="Job title or keyword"
          style={{
            width: fullWidth ? "45rem" : "18rem",
          }}
        />
      </div>
      <div>
        <img src={locationIcon} width={"20rem"} alt="" />
        <select
          name=""
          id=""
          style={{
            width: fullWidth ? "45rem" : "18rem",
          }}
        >
          <option value="">Florance,Italy</option>
        </select>
      </div>
      <GeneralButton fontSize="2rem" btnwidth="20rem">
        Search
      </GeneralButton>
    </form>
  );
}

export default JobSearch;
