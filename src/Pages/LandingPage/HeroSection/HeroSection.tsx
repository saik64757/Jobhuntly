import GeneralButton from "../../../Components/Buttons/GeneralButton/GeneralButton";
import styles from "./HeroSection.module.css";
import searchIcon from "../../../Assets/search-13-512.png";
import locationIcon from "../../../Assets/map-marker-2-512.png";

function HeroSection() {
  return (
    <section className={styles.heroSectionWrapper}>
      <h1>Discover more than</h1>
      <h2>5000+ Jobs</h2>
      <p>
        Great platform for the job seekers that searching for new Carrer heights
        and passionate about startups
      </p>
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
      <p>Popular:UI Designeer,UX Researcher,Android,Admin</p>
    </section>
  );
}

export default HeroSection;
