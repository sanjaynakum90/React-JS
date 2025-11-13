import React from "react";
import styles from "./stat.module.css";

const Stats = ({ pending, completed, total }) => {
    return (
        <>
            <div className={styles.stats}>
                <div className={styles.statbox}>
                    <div className={styles.statnumber} >{pending}</div>
                    <div>Pending Tasks</div>
                </div>
                <div className={styles.statbox}>
                    <div className={styles.statnumber} >{completed}</div>
                    <div>Completed Tasks</div>
                </div>
                <div className={styles.statbox}>
                    <div className={styles.statnumber}>{total}</div>
                    <div>Total Tasks</div>
                </div>
            </div>
        </>
    );
};

export default Stats;