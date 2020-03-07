import { combineReducers } from "redux";

const incrementReducer = (oldValue = 0, action) => {
  if (action.type === "INCREMENT_VALUE") {
    return oldValue + 1;
  }

  return oldValue;
};

const decrementReducer = (oldValue = 0, action) => {
  if (action.type === "DECREMENT_VALUE") {
    return oldValue - 1;
  }

  return oldValue;
};

export default combineReducers({
  increment: incrementReducer,
  decrement: decrementReducer
});
