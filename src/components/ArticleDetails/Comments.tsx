import styles from "../../css/Comments.module.css";
import { CommentProps } from "../../definitions/Comment-definitions";
import CommentCard from "./CommentCard";

function Comments({ comments }: CommentProps) {
  return (
    <div className={styles.comments_ctn}>
      {comments.map((comment) => (
        <CommentCard comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
