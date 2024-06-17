import { useState, useEffect } from "react";
import styles from "../../css/Metrics.module.css";
import { getAverageComments } from "../../fetch-functions/comments-fetches";
import { FetchAverageCommentsResponse } from "../../definitions/Comment-definitions";

function AverageComments() {
  const [averageComments, setAverageComments] = useState<Number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function fetchAverageComments() {
      setIsFetching(true);

      const fetchedAverageComments: FetchAverageCommentsResponse =
        await getAverageComments();
      setAverageComments(fetchedAverageComments.averageCommentsPerDay);

      setIsFetching(false);
    }

    fetchAverageComments();
  }, []);

  return (
    <div className={styles.average_comments}>
      <div className={styles.average_comments_title}>Average Comments/Day</div>
      {!isFetching && averageComments && (
        <div className={styles.average_comments_display}>
          <div className={styles.average_comments_number}>
            {averageComments.toString()}
          </div>
          <div>Comments</div>
        </div>
      )}
    </div>
  );
}

export default AverageComments;
