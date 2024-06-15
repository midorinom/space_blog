import { useState, useEffect } from "react";
import styles from "../../css/Feed.module.css";
import {
  Article,
  FetchArticlesResponse,
} from "../../definitions/Feed-definitions";
import Filters from "./Filters";
import FeedCard from "./FeedCard";
import FeedCardSkeleton from "./FeedCardSkeleton";

function Feed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      const url = "https://api.spaceflightnewsapi.net/v4/articles?limit=50";

      try {
        setIsFetching(true);
        const res = await fetch(url);
        const response: FetchArticlesResponse = await res.json();

        if (articles.length === 0) {
          setArticles(response.results);
        }

        console.log(response);

        setIsFetching(false);
      } catch (err) {
        console.error("Error when fetching all articles:", err);
        throw new Error("Failed to fetch all articles.");
      }
    }

    fetchArticles();
  }, []);

  return (
    <>
      <Filters />
      <div className={styles.feed_ctn}>
        {!isFetching &&
          articles.length > 0 &&
          articles.map((article) => (
            <FeedCard
              title={article.title}
              published_at={article.published_at}
              news_site={article.news_site}
              image_url={article.image_url}
              key={article.id}
            />
          ))}
        {isFetching && (
          <>
            <FeedCardSkeleton />
            <FeedCardSkeleton />
            <FeedCardSkeleton />
          </>
        )}
      </div>
    </>
  );
}

export default Feed;
