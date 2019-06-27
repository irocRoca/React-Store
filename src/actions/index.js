import axios from "axios";

export const addCart = item => {
  return {
    type: "ADD_TO_CART",
    payload: item
  };
};

export const removeCart = id => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
};

export const fetchList = () => dispatch => {
  axios.get("./items.json").then(res => {
    dispatch({
      type: "FETCH_LIST",
      payload: res.data
    });
  });
};

export const sortHigh = () => {
  return {
    type: "FILTER_HIGH"
  };
};

export const sortLow = () => {
  return {
    type: "FILTER_LOW"
  };
};

export const changeQty = data => {
  return {
    type: "CHANGE_QUANITY",
    payload: data.target
  };
};

// Same with Async
// export const fetchList = () => async dispatch => {
//   const response = await axios
//     .get("./item.json")
//   dispatch({
//     type: "FETCH_POST",
//     payload: response
//   });
// };
