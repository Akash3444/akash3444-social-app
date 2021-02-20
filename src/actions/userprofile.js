import axios from "axios";

const baseURI = "https://bd5hq.sse.codesandbox.io/user";

export const getUserProfile = (username, token) => dispatch => {
  dispatch({
    type: "LOADING"
  });
  axios
    .get(`${baseURI}/profile/${username}`, {
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
    .catch(error =>
      dispatch({
        type: "ERROR",
        payload: error
      })
    );
};

export const followUser = (following, token) => dispatch => {
  console.log("Follow action");
  axios
    .get(`${baseURI}/follow/${following}`, {
      headers: {
        "x-auth-token": token
      }
    })
    .then(res => {
      console.log("Calling Follow reducer");
      dispatch({
        type: "FOLLOW"
      });
    })
    .catch(error => console.log(error));
};

export const unfollowUser = (unfollowing, token) => dispatch => {
  console.log("Follow action");
  axios
    .get(`${baseURI}/unfollow/${unfollowing}`, {
      headers: {
        "x-auth-token": token
      }
    })
    .then(res => {
      console.log("Calling Follow reducer");
      dispatch({
        type: "UNFOLLOW"
      });
    })
    .catch(error => console.log(error));
};
