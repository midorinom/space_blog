import styles from "../../css/Metrics.module.css";
import { TopCommentersCardProps } from "../../definitions/Comment-definitions";

function TopCommentersCard({ commenter }: TopCommentersCardProps) {
  return (
    <div className={styles.top_commenters_card}>
      <div>{commenter.username}</div>
      <div>{commenter.totalComments.toString()} Comments</div>
    </div>
  );
}

export default TopCommentersCard;
