import styles from "./Button.module.css";

import React from "react";

function Button(props) {
  return (
    <div
      className={`${styles.btn} ${styles[props.structureVariant]} ${
        styles[props.colorVariant]
      }`}
    >
      {props.children}
    </div>
  );
}

export default Button;
