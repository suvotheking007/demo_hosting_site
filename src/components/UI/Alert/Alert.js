import styles from "./Alert.module.css";

import React from "react";

function Alert(props) {
  return (
    <div className={`${styles.alert} ${styles[props.variant]}`}>
      {props.children}
    </div>
  );
}

export default Alert;
