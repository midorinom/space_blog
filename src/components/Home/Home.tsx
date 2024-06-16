import styles from "../../css/Home.module.css";
import TopCommenters from "./TopCommenters";
import AverageComments from "./AverageComments";
import Feed from "./Feed";

function Home() {
  return (
    <div className={styles.home_ctn}>
      <div className={styles.top_ctn}>
        <div className={styles.title}>Space Blog</div>
        <TopCommenters />
        <AverageComments />
      </div>
      <div className={styles.bottom_ctn}>
        <Feed />
      </div>
    </div>
  );
}

export default Home;
