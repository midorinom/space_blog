import {
  Comment,
  FetchTopCommentersResponse,
} from "../definitions/Comment-definitions";

async function getCommentsById(article_id: Number) {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const res = await fetch(`${apiUrl}/comments/get-by-id`, {
      method: "POST",
      body: JSON.stringify({ article_id: article_id }),
      headers: { "content-type": "application/json" },
    });

    const response: Comment[] = await res.json();
    return response;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(
      `Failed to fetch comments for the article with id of ${article_id}.`
    );
  }
}

async function createComment(comment: Comment) {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const res = await fetch(`${apiUrl}/comments/create`, {
      method: "PUT",
      body: JSON.stringify(comment),
      headers: { "content-type": "application/json" },
    });
    const response = await res.json();
    console.log(response);
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to create a new comment.");
  }
}

async function getTopCommenters() {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const res = await fetch(`${apiUrl}/comments/get-top`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to get top commenters.");
  }
}

async function getAverageComments() {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const res = await fetch(`${apiUrl}/comments/get-average`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to get top commenters.");
  }
}

export { getCommentsById, createComment, getTopCommenters, getAverageComments };
