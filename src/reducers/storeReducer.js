export const storeReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_LIST":
      return [...action.payload];
    case "FILTER_HIGH":
      return state
        .slice()
        .sort((c, d) => {
          return c.price - d.price;
        })
        .reverse();
    case "FILTER_LOW": // Doesn't function correctly
      return state.slice().sort((c, d) => {
        return c.price - d.price;
      });
    default:
      return state;
  }
};

export default storeReducer;
