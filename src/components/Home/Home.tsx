import React from "react";
import styles from "../../css/Home.module.css";

function Home() {
  return (
    <div className={styles.home_ctn}>
      <div className={styles.top_ctn}>
        <div className={styles.title}>Space Blog</div>
        <div className={styles.top_commenters}>Top 3 Commenters</div>
        <div className={styles.average_comments}>Average Comments/Day</div>
      </div>
      <div className={styles.bottom_ctn}>Bottom</div>
    </div>
  );
}

export default Home;
