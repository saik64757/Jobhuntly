import GeneralButton from "../../../Components/Buttons/GeneralButton/GeneralButton";
import styles from "./HeroSection.module.css";
import searchIcon from "../../../Assets/search-13-512.png";
import locationIcon from "../../../Assets/map-marker-2-512.png";
import appleicon from "../../../Assets/apple-logo-1024x728.png";
import CategoriesCard from "../../../Components/CategoriesCard/CategoriesCard";

function HeroSection() {
  let arr1 = Array.from({ length: 5 }, () => 0);
  let catagory = Array.from({ length: 8 }, () => 0);

  return (
    <>
      <section className={styles.heroSectionWrapper}>
        <h1>Discover more than</h1>
        <h2>5000+ Jobs</h2>
        <p>
          Great platform for the job seekers that searching for new Carrer
          heights and passionate about startups
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
      <div className={styles.comaniesLogoWrapper}>
        <p>Companies we helped grow</p>
        <div>
          {arr1.map((ele) => (
            <img src={appleicon} alt="" width={"150rem"} />
          ))}
        </div>
      </div>
      <div className={styles.exploreCatagoriesSection}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.sectionHeader}>Explore by</h2>
          <p>
            show all jobs <span>&#129122;</span>
          </p>
        </div>
        <div>
          {catagory.map(() => (
            <CategoriesCard />
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
