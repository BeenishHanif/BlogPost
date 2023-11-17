import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="box-blog">
      <div className="img-blog">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="text-blog" style={{ paddingTop: "10px" }}>
        <Link to={`/post/${post.id}`}>
          <h2>
            {post.title.length <= 20
              ? post.title
              : `${post.title.slice(0, 20)}...`}
          </h2>
          <span>{post.datetime}</span>
          <p>
            {post.description.length <= 350
              ? post.description
              : `${post.description.slice(0, 350)}...read more`}
          </p>
        </Link>
      </div>
    </article>
  );
};

export default Post;
