import { useState, useEffect } from "react";
import styles from "../../css/ArticleDetails.module.css";
import { Link } from "react-router-dom";
import { Article } from "../../definitions/Feed-definitions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArticleDetailsSkeleton from "./ArticleDetailsSkeleton";

function ArticleDetails() {
  const [article, setArticle] = useState<Article | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const current_url = window.location.href;
  const articleId = current_url.split("/").pop();

  useEffect(() => {
    async function fetchArticles() {
      const url = `https://api.spaceflightnewsapi.net/v4/articles/${articleId}`;

      try {
        setIsFetching(true);
        const res = await fetch(url);
        const response: Article = await res.json();

        setArticle(response);
        setIsFetching(false);
      } catch (err) {
        console.error("Error when fetching article by id.", err);
        throw new Error(`Failed to fetch the article with id of ${articleId}.`);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div className={styles.article_ctn}>
      <div className={styles.top_ctn}>
        <div className={styles.back_button_ctn}>
          <Link to="/" style={{ color: "inherit" }}>
            <ArrowBackIosIcon />
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <div>Back</div>
          </Link>
        </div>
        {!isFetching && article && (
          <div className={styles.article_image_ctn}>
            <img
              src={article.image_url}
              alt={article.title}
              className="article_image"
            />
          </div>
        )}
        {isFetching && <div>Loading...</div>}
      </div>
      {!isFetching && article && (
        <div className={styles.bottom_ctn}>
          <div className={styles.bottom_contents}>
            <div className={styles.headings_ctn}>
              <div className={styles.title}>{article.title}</div>
              <div className={styles.source_ctn}>{article.news_site}</div>
              <div className={styles.summary_ctn}>
                Summary: {article.summary}
              </div>
            </div>
            <div className={styles.total_comments_ctn}>2 Comments</div>
            <div>Username Input</div>
            <div>Comment Input</div>
            <div>Comment Buttons</div>
            <div>Comments</div>
          </div>
        </div>
      )}
      {isFetching && <ArticleDetailsSkeleton />}
    </div>
  );
}

export default ArticleDetails;
