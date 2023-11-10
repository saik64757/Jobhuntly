import JobsCardSquare from "../../Components/JobscardSqr/JobscardSqr";
import SearchSection from "../../Components/SearchSection/SearchSection";
import styles from "./BrowserCompanies.module.css";
import DesignLogo from "../../Assets/Icons/pencil-paintbrush.png";
import DesignLogoColored from "../../Assets/Icons/pencil-paintbrush colored.png";
import { categories } from "../../Data/Options";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { useState } from "react";
import RoundPill from "../../Components/Pills/RoundPill/RoundPill";

function BrowserCompanies() {
  const [iscategorySelected, setiscategorySelected] = useState(false);

  let arr1 = Array.from({ length: 8 }, () => 0);

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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
      <div className={styles.CompaniesByCatagory}>
        <h1>Companies By Category</h1>
        <Slider {...settings}>
          {(categories as unknown as any[]).map((ele) => (
            <div className={styles.catagorycarasoul}>
              <img src={DesignLogo} alt="DesignLogo" />
              <h1>{ele.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.companyResultsWrapper}>
        <div>
          <img
            src={DesignLogoColored}
            alt="DesignLogo"
            width={"30rem"}
            height={"30rem"}
          />

          <p>24 Results</p>
        </div>
        <div className={styles.companiesCardWrapper}>
          {arr1.map(() => (
            <div>
              <div className={styles.companiesCard}>
                <img
                  src={DesignLogoColored}
                  alt=""
                  width={"50rem"}
                  height={"50rem"}
                />
                <h2>PentaGram</h2>
                <RoundPill bgColor="#4540de16" color="#4640de" fontSize="2rem">
                  3 Jobs
                </RoundPill>
              </div>
            </div>
          ))}
        </div>
        <p>View more Design companies &#129122;</p>
      </div>
    </div>
  );
}

export default BrowserCompanies;
