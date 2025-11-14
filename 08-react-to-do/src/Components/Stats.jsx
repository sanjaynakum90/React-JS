import React from "react";
import styles from "./stat.module.css";

const Stats = ({ pending, completed, total }) => {
  return (
    <div className={styles.statsLayout}>
      <div className={styles.statsCard}>
        <h1 style={{color:"#10b981"}}>{pending}</h1>
        <p>Pending Task</p>
      </div>

      <div className={styles.statsCard}>
        <h1 style={{color: "#f59e0b"}}>{completed}</h1>
        <p>Completed Task</p>
      </div>

      <div className={styles.statsCard}>
        <h1 style={{color:"#3b82f6"}}>{total}</h1>
        <p>Total Task</p>
      </div>
    </div>
  );
};

export default Stats;