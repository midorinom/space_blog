import styles from "../../css/Metrics.module.css";
import TopCommentersCard from "./TopCommentersCard";

function TopCommenters() {
  return (
    <div className={styles.top_commenters_ctn}>
      <div className={styles.top_commenters_title}>Top 3 Commenters</div>
      <div className={styles.top_commenters_cards_ctn}>
        <TopCommentersCard />
        <TopCommentersCard />
        <TopCommentersCard />
      </div>
    </div>
  );
}

export default TopCommenters;
