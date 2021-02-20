const initialState = {
  loading: false,
  error: null,
  data: {}
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FOLLOW":
      return {
        ...state,
        data: {
          ...state.data,
          following: true,
          followersCount: state.data.followersCount + 1
        }
      };
    case "UNFOLLOW":
      return {
        ...state,
        data: {
          ...state.data,
          following: false,
          followersCount: state.data.followersCount - 1
        }
      };
    default:
      return state;
  }
};

export default userProfileReducer;
