import React from "react";
import { Link, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <div>
      <main>
        <article>
          {post && (
            <>
              <div className="postpage">
                <h2>{post.title}</h2>
                <h6>{post.datetime}</h6>

                <span style={{ color: "#000", lineHeight: "1.8" }}>
                  <img src={post.image} />
                  {post.description}
                </span>
              </div>
              <div
                className="postpage-button"
                style={{ paddingBottom: "100px" }}
              >
                <button onClick={() => handleDelete(post.id)}>Delete</button>
                <Link to={`/edit/${post.id}`}>
                  <button>Edit</button>
                </Link>
              </div>
            </>
          )}
          {!post && (
            <div style={{ padding: "100px 10px" }}>
              <h2>Post not found</h2>
              <h5>
                <Link to="/">VISIT OUR HOMEPAGE</Link>
              </h5>
            </div>
          )}
        </article>
      </main>
    </div>
  );
};

export default PostPage;
