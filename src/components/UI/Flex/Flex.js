import styles from "./Flex.module.css";

import React from "react";

function Flex(props) {
  return <div className={styles.flex}>{props.children}</div>;
}

export default Flex;
