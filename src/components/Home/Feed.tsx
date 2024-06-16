import { useState, useEffect } from "react";
import styles from "../../css/Feed.module.css";
import {
  Article,
  DateFilterState,
  FetchArticlesResponse,
} from "../../definitions/Feed-definitions";
import Filters from "./Filters";
import FeedCard from "./FeedCard";
import FeedCardSkeleton from "./FeedCardSkeleton";
import dayjs from "dayjs";

function Feed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [feedArticles, setFeedArticles] = useState<Article[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<DateFilterState>({
    from: null,
    to: null,
  });

  useEffect(() => {
    async function fetchArticles() {
      const url = "https://api.spaceflightnewsapi.net/v4/articles?limit=50";

      try {
        setIsFetching(true);
        const res = await fetch(url);
        const response: FetchArticlesResponse = await res.json();

        setArticles(response.results);
        setFeedArticles(response.results);
        setIsFetching(false);
      } catch (err) {
        console.error("Error when fetching all articles:", err);
        throw new Error("Failed to fetch all articles.");
      }
    }

    fetchArticles();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      const newArticles = articles.filter((article) => {
        const title = article.title.toLowerCase();
        const publishedDate = dayjs(article.published_at).startOf("day");

        return (
          title.includes(searchFilter.toLowerCase()) &&
          (!dateFilter.from || publishedDate.diff(dateFilter.from) >= 0) &&
          (!dateFilter.to || publishedDate.diff(dateFilter.to) <= 0)
        );
      });

      setFeedArticles(newArticles);
    }
  }, [searchFilter, dateFilter]);

  return (
    <>
      <Filters
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />
      <div className={styles.feed_ctn}>
        {!isFetching &&
          feedArticles.length > 0 &&
          feedArticles.map((article) => (
            <FeedCard
              article_id={article.id}
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
