import styles from "./Card.module.css";

import React from "react";

function Card(props) {
  return <div className={styles.card}>{props.children}</div>;
}

export default Card;
