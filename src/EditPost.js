import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPost = ({
  posts,
  editDescription,
  editTitle,
  setEditTitle,
  setEditDescription,
  handleEdit,
  editImage,
  setEditImage,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditDescription(post.description);
      setEditImage(post.image);
    }
  }, [post, setEditTitle, setEditDescription]);

  return (
    <div className="post-blog">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">TITLE</label>
        <input
          autofocus
          id="postTitle"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          required
        ></input>
        <label htmlFor="imagelink">Paste Image Address</label>
        <input
          value={editImage}
          onChange={(e) => setEditImage(e.target.value)}
          id="imageLink"
          type="text"
          required
          autoComplete="off"
        />

        <label htmlFor="postBody">Description</label>
        <textarea
          autoFocus
          id="postBody"
          required
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
        <button onClick={() => handleEdit(post.id)}>Submit</button>
      </form>
    </div>
  );
};

export default EditPost;
