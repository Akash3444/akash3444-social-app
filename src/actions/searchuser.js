import axios from "axios";

export const searchUsers = (query, token) => dispatch => {
  dispatch({
    type: "LOADING"
  });
  axios
    .get(`https://bd5hq.sse.codesandbox.io/user/search/${query}`, {
      headers: {
        "x-auth-token": token
      }
    })
    .then(res =>
      dispatch({
        type: "SUCCESS",
        payload: res.data
      })
    )
    .catch(error => {
      dispatch({ type: "ERROR", payload: error });
    });
};
