export type Comment = {
  article_id: Number;
  username: String;
  comment: String;
  date: String;
};

export type CommentInputProps = {
  setShowCommentInput: (showCommentInput: boolean) => void;
  article_id: Number;
  fetchComments: () => void;
};

export type CommentProps = {
  comments: Comment[];
};

export type CommentCardProps = {
  comment: Comment;
};
