import React from "react";

import styles from "./Hello.module.css";

export function Hello() {
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>Hello with module.scss...</span>
      </div>
    </div>
  );
}
