import { useState } from "react";
import styles from "./FilterDropdown.module.css";
import { typeofEmployment } from "../../Data/Options";

function FilterDropdown() {
  const [isOpen, setIopen] = useState(true);
  return (
    <div className={styles.filterDropDownWrapper}>
      <div className={styles.dropDownHead}>
        <h2>Type of Emplotment</h2>
        {isOpen ? (
          <div onClick={() => setIopen(!isOpen)}>&#11205;</div>
        ) : (
          <div onClick={() => setIopen(!isOpen)}> &#11206;</div>
        )}
      </div>
      <div className={styles.checkboxListWrap}>
        {isOpen ? (
          typeofEmployment.map((ele) => {
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
