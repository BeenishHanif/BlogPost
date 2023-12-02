import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

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
                <div className="postpage-button">
                  <button onClick={() => handleDelete(post.id)}>
                    <FaTrashAlt />
                  </button>
                  <Link to={`/edit/${post.id}`}>
                    <button>
                      <FaEdit />
                    </button>
                  </Link>
                </div>

                <span style={{ color: "#000", lineHeight: "1.8" }}>
                  <img src={post.image} />
                  {post.description}
                </span>
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
