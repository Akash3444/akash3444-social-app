export const searchDisplay = display => dispatch => {
  dispatch({
    type: "SEARCH_DISPLAY",
    payload: display
  });
};
