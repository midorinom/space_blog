import styles from "../../css/Comments.module.css";
import CommentCard from "./CommentCard";

function Comments() {
  return (
    <div className={styles.comments_ctn}>
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
}

export default Comments;
