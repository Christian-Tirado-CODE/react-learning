import React from 'react';
import classes from "./MealItem.module.css";
const MealItem = (props) => {
    const price = `$${props.mealPrice.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
            <h3>{props.mealName}</h3>
            <p className={classes.description}>{props.mealDescription}</p>
            <span className={classes.price}>{price}</span>
            </div>
            <div>

            </div>
        </li>
    );
};

export default MealItem;