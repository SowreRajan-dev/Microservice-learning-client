import axios from "axios";
import React, { useState } from "react";

function CommentCreate({ postId }) {
  const [comment, setComment] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content: comment,
    });
    setComment("");
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New Coment</label>
          <input
            type="text"
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentCreate;
