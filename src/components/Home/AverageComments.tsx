import styles from "../../css/Metrics.module.css";

function AverageComments() {
  return (
    <div className={styles.average_comments}>
      <div className={styles.average_comments_title}>Average Comments/Day</div>
      <div className={styles.average_comments_display}>
        <div className={styles.average_comments_number}>8</div>
        <div>Comments</div>
      </div>
    </div>
  );
}

export default AverageComments;
