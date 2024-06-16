import styles from "../../css/Comments.module.css";
import { CommentCardProps } from "../../definitions/Comment-definitions";

function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className={styles.comment_card}>
      <div className={styles.comment_card_name_ctn}>
        <div className={styles.comment_card_name}>{comment.username}</div>
        <div>{comment.date}</div>
      </div>
      <div>{comment.comment}</div>
    </div>
  );
}

export default CommentCard;
