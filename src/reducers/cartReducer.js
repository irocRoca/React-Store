const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let exist = null;
      let list = state.map(item => {
        if (item.id === action.payload.id) {
          item.qty++;
          exist = true;
        }
        return item;
      });
      if (exist) {
        exist = false;
        return [...list];
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_FROM_CART":
      return state.filter(item => {
        if (item.id === action.payload) item.qty = 1;
        return item.id !== action.payload;
      });
    case "CHANGE_QUANITY":
      return state.map(item => {
        let id = parseInt(action.payload.name);
        if (item.id === id) {
          item.qty = action.payload.value;
          item.total = item.price * item.qty;
        }
        return item;
      });

    default:
      return state;
  }
};

export default cartReducer;
