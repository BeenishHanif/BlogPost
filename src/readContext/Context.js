import React, { createContext, useContext, useReducer } from "react";
import { blogReducer } from "./Reducer";
const Blog = createContext();

const Context = ({ children }) => {
  const [blogState, blogDispatch] = useReducer(blogReducer, {
    searchQuery: " ",
    bynewtoold: false,
    byoldtonew: false,
  });
  return (
    <Blog.Provider value={{ blogState, blogDispatch }}>
      {children}
    </Blog.Provider>
  );
};

export const BlogInState = () => {
  return useContext(Blog);
};
export default Context;
