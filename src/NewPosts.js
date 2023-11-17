import React from "react";

const NewPosts = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postDescription,
  setPostDescription,
  postImage,
  setPostImage,
}) => {
  return (
    <div className="post-blog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          id="title"
          type="text"
          autoComplete="off"
          required
        />
        <label htmlFor="imagelink">Paste Image Address</label>
        <input
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
          id="imageLink"
          type="text"
          required
          autoComplete="off"
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          autoComplete="off"
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default NewPosts;
