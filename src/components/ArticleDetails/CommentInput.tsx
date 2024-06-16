import { useState, useEffect } from "react";
import styles from "../../css/ArticleDetails.module.css";
import { Box, Button, TextField } from "@mui/material";
import { CommentInputProps } from "../../definitions/Comment-definitions";

function CommentInput({ setShowCommentInput }: CommentInputProps) {
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [commentError, setCommentError] = useState<string>("");

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
          error={usernameError ? true : false}
          id={usernameError ? "outlined-error-helper-text" : "outlined-basic"}
          label="Username"
          variant="outlined"
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
            error={commentError ? true : false}
            id="outlined-error-multiline-static"
            label="Comment"
            multiline
            rows={4}
            inputProps={{ maxLength: 255 }}
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
