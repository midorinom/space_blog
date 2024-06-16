import { useState, useEffect } from "react";
import styles from "../../css/ArticleDetails.module.css";
import { Link } from "react-router-dom";
import { getCommentsById } from "../../fetch-functions/comments-fetches";
import { Article } from "../../definitions/Feed-definitions";
import { Comment } from "../../definitions/Comment-definitions";
import Comments from "./Comments";
import CommentInput from "./CommentInput";
import ArticleDetailsSkeleton from "./ArticleDetailsSkeleton";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function ArticleDetails() {
  const [article, setArticle] = useState<Article | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isFetchingComments, setIsFetchingComments] = useState<boolean>(false);
  const [showCommentInput, setShowCommentInput] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const current_url = window.location.href;
  const articleId = current_url.split("/").pop();

  async function fetchComments() {
    setIsFetchingComments(true);

    const fetchedComments = await getCommentsById(Number(articleId));
    setComments(fetchedComments);

    setIsFetchingComments(false);
  }

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
    fetchComments();
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
      </div>
      {!isFetching && article && (
        <div className={styles.bottom_ctn}>
          <div className={styles.bottom_contents}>
            <div className={styles.headings_ctn}>
              <div className={styles.title}>{article.title}</div>
              <div>{article.news_site}</div>
              <div>Summary: {article.summary}</div>
            </div>
            {!isFetchingComments && (
              <div className={styles.total_comments_ctn}>
                <div>{comments.length} Comments</div>
                {!showCommentInput && (
                  <div className={styles.post_comment_ctn}>
                    <Button
                      variant="contained"
                      onClick={() => setShowCommentInput(true)}
                    >
                      Post Comment
                    </Button>
                  </div>
                )}
              </div>
            )}
            {showCommentInput && (
              <CommentInput
                setShowCommentInput={setShowCommentInput}
                article_id={Number(articleId)}
                fetchComments={fetchComments}
              />
            )}
            {!isFetchingComments && comments ? (
              <Comments comments={comments} />
            ) : (
              <ArticleDetailsSkeleton />
            )}
          </div>
        </div>
      )}
      {isFetching && <ArticleDetailsSkeleton />}
    </div>
  );
}

export default ArticleDetails;
