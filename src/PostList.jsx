import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

function PostList() {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  const renderPosts = Object.values(posts).map((post, index) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px", padding: 10 }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        <CommentList comments={post?.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
}

export default PostList;
