import React, { useState } from "react";
import { createComment } from "../../fetch-functions/comments-fetches";
import styles from "../../css/ArticleDetails.module.css";
import { Box, Button, TextField } from "@mui/material";
import { CommentInputProps } from "../../definitions/Comment-definitions";

function CommentInput({
  setShowCommentInput,
  article_id,
  fetchComments,
}: CommentInputProps) {
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [commentError, setCommentError] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  function handleUsernameOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const usernameInput = e.target.value;
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;

    setUsername(usernameInput);

    if (!alphanumericRegex.test(usernameInput)) {
      setUsernameError("Please use alphanumeric characters only.");
      return;
    }
    setUsernameError("");
  }

  function handleCommentOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const commentInput = e.target.value;
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;

    setComment(commentInput);

    if (!alphanumericRegex.test(commentInput)) {
      setCommentError("Please use alphanumeric characters only.");
      return;
    }
    setCommentError("");
  }

  async function handlePublish(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    if (!username) {
      setUsernameError("Username is required.");
    }

    if (!comment) {
      setCommentError("Comment is required.");
    }

    if (!usernameError && !commentError && username && comment && !isFetching) {
      setIsFetching(true);

      await createComment({
        article_id,
        username,
        comment,
        date: new Date().toISOString(),
      });

      await fetchComments();
      setShowCommentInput(false);
      setIsFetching(false);
    }
  }

  return (
    <div className={styles.comment_input_ctn}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={username}
          onChange={handleUsernameOnChange}
          id={usernameError ? "outlined-error-helper-text" : "outlined-basic"}
          label="Username"
          variant="outlined"
          error={usernameError ? true : false}
          helperText={usernameError}
          inputProps={{ maxLength: 15 }}
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            value={comment}
            onChange={handleCommentOnChange}
            id="outlined-error-multiline-static"
            label="Comment"
            multiline
            rows={4}
            inputProps={{ maxLength: 255 }}
            error={commentError ? true : false}
            helperText={commentError}
            FormHelperTextProps={{
              className: styles.comment_input_helper_text,
            }}
          />
        </div>
      </Box>
      <div className={styles.comment_buttons_ctn}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "lightgray", color: "black" }}
          onClick={() => setShowCommentInput(false)}
        >
          Cancel
        </Button>
        <Button
          onClick={handlePublish}
          variant="contained"
          sx={{ backgroundColor: "black", color: "white" }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}

export default CommentInput;
