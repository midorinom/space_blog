import styles from "../../css/Feed.module.css";
import { FeedCardProps } from "../../definitions/Feed-definitions";
import CommentIcon from "@mui/icons-material/Comment";

function FeedCard({
  title,
  published_at,
  news_site,
  image_url,
}: FeedCardProps) {
  const dateObject = new Date(published_at);

  return (
    <div className={styles.feed_card}>
      <div className={styles.feed_card_image_container}>
        <img src={image_url} alt={title} className={styles.feed_card_image} />
      </div>
      <div className={styles.feed_card_info_container}>
        <div className={styles.feed_card_title_container}>
          <div className={styles.feed_card_title}>{title}</div>
          <div>{news_site}</div>
        </div>
        <div className={styles.feed_card_date}>
          {dateObject.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </div>
        <div className={styles.feed_card_comments}>
          <CommentIcon />
          <div>2</div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
