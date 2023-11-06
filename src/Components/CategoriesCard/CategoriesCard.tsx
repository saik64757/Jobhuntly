import category1Icon from "../../Assets/profit_2672392.png";
import styles from "./CategoriesCard.module.css";

function CategoriesCard() {
  return (
    <div className={styles.CategoriesCardWrapper}>
      <img src={category1Icon} width={"45rem"} alt="" />
      <br />
      <br />
      <br />
      <h2>Design</h2>
      <p>
        233 Jobs Available <span>&#129122;</span>
      </p>
    </div>
  );
}

export default CategoriesCard;
