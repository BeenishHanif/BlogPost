export const blogReducer = (state, action) => {
  switch (action.type) {
    case "SORT_NEW_TO_OLD":
      return { ...state, bynewtoold: action.payload, byoldtonew: false };
    case "SORT_OLD_TO_NEW":
      return { ...state, byoldtonew: action.payload, bynewtoold: false };
    case "CLEAR_FILTERS":
      return {
        searchQuery: " ",
        bynewtoold: false,
        byoldtonew: false,
      };
    case "SEARCH_BLOG":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
