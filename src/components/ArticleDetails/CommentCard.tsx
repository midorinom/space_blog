import styles from "../../css/Comments.module.css";

function CommentCard() {
  return (
    <div className={styles.comment_card}>
      <div className={styles.comment_card_name_ctn}>
        <div className={styles.comment_card_name}>Name</div>
        <div>Date</div>
      </div>
      <div>Comment</div>
    </div>
  );
}

export default CommentCard;
