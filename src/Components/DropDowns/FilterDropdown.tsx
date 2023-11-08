import { useState } from "react";
import styles from "./FilterDropdown.module.css";

interface FilterDropdownProps {
  filterOptions: Array<{ id: string; name: string }>;
  name: string;
}

function FilterDropdown({ filterOptions, name }: FilterDropdownProps) {
  const [isOpen, setIopen] = useState(true);
  return (
    <div className={styles.filterDropDownWrapper}>
      <div className={styles.dropDownHead}>
        <h2>{name}</h2>
        {isOpen ? (
          <div onClick={() => setIopen(!isOpen)} >&#11205;</div>
        ) : (
          <div onClick={() => setIopen(!isOpen)}> &#11206;</div>
        )}
      </div>
      <div className={styles.checkboxListWrap}>
        {isOpen ? (
          filterOptions.map((ele) => {
            return (
              <div key={ele.id}>
                <input
                  type="checkbox"
                  id={ele.id}
                  value={ele.name}
                  className={styles.checkboXinput}
                />
                <label className={styles.checkboXlable} htmlFor="">
                  {ele.name}
                </label>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default FilterDropdown;
