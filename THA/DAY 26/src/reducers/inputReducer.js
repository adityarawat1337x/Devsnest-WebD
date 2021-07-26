const inputReducer = (state = [], action) => {
  if (action.type === "NAME_CHANGE") console.log(state[0]);
  else if (action.type === "EMAIL_CHANGE") console.log(state[0]);
  return state;
};
export default inputReducer;
