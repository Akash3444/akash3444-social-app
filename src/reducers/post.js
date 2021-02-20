const initialState = {
  loading: false,
  error: null,
  posts: []
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, error: action.payload };
    case "GET":
      return {
        loading: false,
        error: null,
        posts: action.payload
      };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default postReducer;
