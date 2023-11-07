import React from "react";
import Styles from "./SearchSection.module.css";
import JobSearch from "../JobSearch/JobSearch";

interface searchProps {
  children: React.ReactNode;
}

function SearchSection({ children }: searchProps) {
  return (
    <div>
      <section className={Styles.SearchSectionWrapper}>
        {children}
        <br />
        <JobSearch fullWidth />
      </section>
      <p className={Styles.popularTag}>
        Popular:Twitter,MicroSoft,Apple,Facebook
      </p>
      <br />
      <br />
    </div>
  );
}

export default SearchSection;
