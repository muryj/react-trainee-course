import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </>
  );
}