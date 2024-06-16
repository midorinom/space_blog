import { useState, useEffect } from "react";
import styles from "../../css/Feed.module.css";
import { getCommentsById } from "../../fetch-functions/comments-fetches";
import { Link } from "react-router-dom";
import { FeedCardProps } from "../../definitions/Feed-definitions";
import CommentIcon from "@mui/icons-material/Comment";

function FeedCard({
  article_id,
  title,
  published_at,
  news_site,
  image_url,
}: FeedCardProps) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [totalComments, setTotalComments] = useState<Number>(0);
  const dateObject = new Date(published_at);

  useEffect(() => {
    async function fetchComments() {
      setIsFetching(true);

      const fetchedComments = await getCommentsById(article_id);
      setTotalComments(fetchedComments.length);

      setIsFetching(false);
    }

    fetchComments();
  }, []);

  return (
    <div className={styles.feed_card}>
      <Link
        to={`article-details/${article_id}`}
        className={styles.feed_card_image_ctn}
      >
        <img src={image_url} alt={title} className={styles.feed_card_image} />
      </Link>
      <div className={styles.feed_card_info_ctn}>
        <div className={styles.feed_card_title_ctn}>
          <Link
            to={`article-details/${article_id}`}
            className={styles.feed_card_title}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            {title}
          </Link>
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
          {!isFetching && <CommentIcon />}
          {!isFetching && <div>{totalComments.toString()}</div>}
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
