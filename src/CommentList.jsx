import axios from "axios";
import React from "react";

function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return (
    <div>
      <p>{comments.length} comments</p>
      <ul>{renderedComments}</ul>
    </div>
  );
}

export default CommentList;
