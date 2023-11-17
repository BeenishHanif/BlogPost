import React from "react";
import Post from "./Post";
import { BlogInState } from "./readContext/Context";

const Feed = ({ posts }) => {
  const {
    blogState: { bynewtoold, byoldtonew, searchQuery },
  } = BlogInState();
  const transformBlogs = () => {
    let sortedPosts = posts;
    if (bynewtoold) {
      sortedPosts = sortedPosts.sort(
        (a, b) => new Date(b.datetime) - new Date(a.datetime)
      );
    }
    if (byoldtonew) {
      sortedPosts = sortedPosts.sort(
        (a, b) => new Date(a.datetime) - new Date(b.datetime)
      );
    }
    if (searchQuery) {
      sortedPosts = sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return sortedPosts;
  };
  return (
    <section className="feed">
      {transformBlogs().map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Feed;
