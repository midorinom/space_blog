import { useState, useEffect } from "react";
import styles from "../../css/Metrics.module.css";
import TopCommentersCard from "./TopCommentersCard";
import { getTopCommenters } from "../../fetch-functions/comments-fetches";
import {
  FetchTopCommentersResponse,
  TopCommenter,
} from "../../definitions/Comment-definitions";

function TopCommenters() {
  const [topCommenters, setTopCommenters] = useState<TopCommenter[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTopCommenters() {
      setIsFetching(true);

      const fetchedTopCommenters: FetchTopCommentersResponse =
        await getTopCommenters();
      setTopCommenters(fetchedTopCommenters.topCommenters);

      setIsFetching(false);
    }

    fetchTopCommenters();
  }, []);

  return (
    <div className={styles.top_commenters_ctn}>
      <div className={styles.top_commenters_title}>Top 3 Commenters</div>
      <div className={styles.top_commenters_cards_ctn}>
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          topCommenters.map((commenter) => (
            <TopCommentersCard commenter={commenter} />
          ))
        )}
      </div>
    </div>
  );
}

export default TopCommenters;
