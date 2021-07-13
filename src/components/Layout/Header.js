import { Fragment } from "react";
import classes from "./Header.module.css";
import image from "../../assets/main-image.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button><HeaderCartButton /></button>
      </header>

      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
