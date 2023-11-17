import React from "react";
import { BlogInState } from "./readContext/Context";

const Filter = () => {
  const { blogDispatch } = BlogInState();

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "1") {
      blogDispatch({ type: "SORT_NEW_TO_OLD", payload: true });
    } else if (value === "2") {
      blogDispatch({ type: "SORT_OLD_TO_NEW", payload: true });
    }
  };

  return (
    <div className="filters">
      <input
        type="search"
        autoComplete="off"
        placeholder="Search.."
        onChange={(e) => {
          blogDispatch({
            type: "SEARCH_BLOG",
            payload: e.target.value,
          });
        }}
      />
      <div className="custom-select">
        <select onChange={handleSortChange}>
          <option value="1">Newest to Oldest</option>
          <option value="2">Oldest to Newest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
