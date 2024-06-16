import styles from "../../css/ArticleDetails.module.css";

function ArticleDetailsSkeleton() {
  return (
    <div className={styles.skeleton_ctn}>
      <p>Loading...</p>
    </div>
  );
}

export default ArticleDetailsSkeleton;
