import React from "react";

import styles from "./World.module.css";

export function World() {
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}> World with module.scss...</span>
      </div>
    </div>
  );
}
