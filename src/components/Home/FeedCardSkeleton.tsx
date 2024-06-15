import styles from "../../css/Feed.module.css";

function FeedCardSkeleton() {
  return (
    <div className={styles.feed_card}>
      <p>Loading</p>
    </div>
  );
}

export default FeedCardSkeleton;
