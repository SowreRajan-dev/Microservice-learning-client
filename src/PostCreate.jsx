import React, { useState } from "react";
import axios from "axios";
function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" style={{ marginTop: 10 }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostCreate;
