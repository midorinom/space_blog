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

export type TopCommenter = {
  username: String;
  totalComments: Number;
};

export type FetchTopCommentersResponse = {
  topCommenters: TopCommenter[];
};

export type TopCommentersCardProps = {
  commenter: TopCommenter;
};

export type FetchAverageCommentsResponse = {
  averageCommentsPerDay: Number;
};
