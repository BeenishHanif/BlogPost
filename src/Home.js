import React from "react";
import Feed from "./Feed";
import Filter from "./Filter";

const Home = ({ posts }) => {
  return (
    <div>
      <Filter />
      {posts ? <Feed posts={posts}></Feed> : <p>No blogs to show..</p>}
    </div>
  );
};

export default Home;
