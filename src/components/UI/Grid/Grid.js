import styles from "./Grid.module.css";

import React from "react";

function Grid(props) {
  return (
    <div className={`${styles.grid} ${styles[props.variant]}`}>
      {props.children}
    </div>
  );
}

export default Grid;
