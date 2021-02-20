const initialState = {
  display: "d-none"
};

const searchDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_DISPLAY":
      return { display: action.payload };
    default:
      return state;
  }
};

export default searchDisplayReducer;
