import styles from "../../css/Home.module.css";
import Feed from "./Feed";

function Home() {
  return (
    <div className={styles.home_ctn}>
      <div className={styles.top_ctn}>
        <div className={styles.title}>Space Blog</div>
        <div className={styles.top_commenters}>Top 3 Commenters</div>
        <div className={styles.average_comments}>Average Comments/Day</div>
      </div>
      <div className={styles.bottom_ctn}>
        <Feed />
      </div>
    </div>
  );
}

export default Home;
