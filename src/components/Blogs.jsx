import React from "react";
import { Link } from "react-router-dom";

function Blogs({ posts }) {
  return (
    <div className="postDiv">
      {posts.map((post) => {
        return (
          <h4 key={post.id} className={post.id % 2 === 0 ? "postEven": "postOdd"}>
            <Link
              to={{
                pathname: `/post/${post.id}`,
                details: {...post },
              }}
            >
              {post.id}.{post.title}
            </Link>
          </h4>
        );
      })}
    </div>
  );
}

export default Blogs;
