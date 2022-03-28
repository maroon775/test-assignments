import React from "react";
import HintIconImage from "../../assets/hint.svg";
import style from "./Icon.module.scss";
const HintIcon: React.FC = () => {
  return (
    <span
      className={style.defaultIcon}
      style={{ backgroundImage: `url(${HintIconImage})` }}
    />
  );
};

export default HintIcon;
