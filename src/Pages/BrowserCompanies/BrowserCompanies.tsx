import JobsCardSquare from "../../Components/JobscardSqr/JobscardSqr";
import SearchSection from "../../Components/SearchSection/SearchSection";
import styles from "./BrowserCompanies.module.css";
import DesignLogo from "../../Assets/Icons/pencil-paintbrush.png";
import { categories } from "../../Data/Options";

function BrowserCompanies() {
  let newArr = Array.from({ length: 6 }, () => 0);
  return (
    <div className={styles.browserCompaniesWrapper}>
      <div className={styles.searchCompanySection}>
        <SearchSection>
          <h1>Find your</h1>
          <p>Find your Dream companies you dream for</p>
        </SearchSection>
      </div>
      <div className={styles.recomendedCompanies}>
        <h1>Recommended Companies</h1>
        <p>Based on your profile.company preferances, and recentl activity</p>
        <div>
          {newArr.map((ele, idx) => (
            <div key={idx}>
              <JobsCardSquare isCompanies={true} cardWidth="38rem" />
            </div>
          ))}
        </div>
      </div>
      {(categories as unknown as any[]).map((ele) => (
        <div className={styles.catagorycarasoul}>
          <img src={DesignLogo} alt="DesignLogo" />
          <h1>{ele.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default BrowserCompanies;
