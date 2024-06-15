import React from "react";
import styles from "../../css/Feed.module.css";
import FeedCard from "./FeedCard";

function Feed() {
  return (
    <div className={styles.feed_ctn}>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
}

export default Feed;
