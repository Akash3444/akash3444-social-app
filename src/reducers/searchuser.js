const initialState = {
  loading: false,
  error: null,
  users: []
};
const searchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SUCCESS":
      return { ...state, loading: false, users: action.payload };
    default:
      return state;
  }
};

export default searchUserReducer;
