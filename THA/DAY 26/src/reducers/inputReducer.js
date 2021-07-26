const inputReducer = (state = [], action) => {
  if (action.type === "NAME_CHANGE") {
    state[0] = action.payload;
    console.log(state);
    return state;
  } else if (action.type === "EMAIL_CHANGE") {
    state[1] = action.payload;
    console.log(state);
    return state;
  }
  return state;
};

export default inputReducer;
