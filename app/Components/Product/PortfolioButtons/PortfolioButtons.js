import react, { useState } from "react";
import style from "./PortfolioButtons.module.css";
import "../../../globals.css";

const PortfolioButtons = (props) => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className={`${style.product__buttons} container_fluid`}>
      <div className={`${style.product_button} container`}>
        <ul className={style.button__list}>
          <li
            onClick={(e) => {
              props.setValue("All");

              setIsActive(1);
            }}
            className={`${style.tabs} ${
              isActive === 1 ? style.active : ""
            } button `}
          >
            All
          </li>
          <li
            onClick={(e) => {
              props.setValue("Education");
              setIsActive(2);
            }}
            className={`${style.tabs} ${
              isActive === 2 ? style.active : ""
            } button `}
          >
            Education
          </li>
          <li
            onClick={(e) => {
              props.setValue("Ecommerce");
              setIsActive(3);
            }}
            className={`${style.tabs} ${
              isActive === 3 ? style.active : ""
            } button `}
          >
            Ecommerce
          </li>
          <li
            onClick={(e) => {
              props.setValue("Marketing");
              setIsActive(4);
            }}
            className={`${style.tabs} ${
              isActive === 4 ? style.active : ""
            } button `}
          >
            Marketing
          </li>
          <li
            onClick={(e) => {
              props.setValue("Ecommerce");
              setIsActive(6);
            }}
            className={`${style.tabs} ${
              isActive === 6 ? style.active : ""
            } button `}
          >
            Ecommerce
          </li>
          <li
            onClick={(e) => {
              props.setValue("Medical");
              setIsActive(7);
            }}
            className={`${style.tabs} ${
              isActive === 7 ? style.active : ""
            } button `}
          >
            Medical
          </li>
          <li
            onClick={(e) => {
              props.setValue("Media");
              setIsActive(8);
            }}
            className={`${style.tabs} ${
              isActive === 8 ? style.active : ""
            } button `}
          >
            Media
          </li>
          <li
            onClick={(e) => {
              props.setValue("Business");
              setIsActive(9);
            }}
            className={`${style.tabs} ${
              isActive === 9 ? style.active : ""
            } button `}
          >
            Business
          </li>
          <li
            onClick={(e) => {
              props.setValue("Beauty");
              setIsActive(11);
            }}
            className={`${style.tabs} ${
              isActive === 11 ? style.active : ""
            } button `}
          >
            Beauty
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioButtons;
