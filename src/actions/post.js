import axios from "axios";

const baseURI = "https://bd5hq.sse.codesandbox.io/post";

export const getPosts = token => dispatch => {
  dispatch({
    type: "LOADING"
  });
  axios
    .get(`${baseURI}/`, {
      headers: {
        "x-auth-token": token
      }
    })
    .then(res => {
      console.log("Posts ", res.data);
      dispatch({
        type: "GET",
        payload: res.data
      });
    })
    .catch(error =>
      dispatch({
        type: "ERROR",
        payload: error
      })
    );
};

export const createPost = (postData, token) => dispatch => {
  axios
    .post(`${baseURI}/create`, postData, {
      headers: { "x-auth-token": token }
    })
    .then(res => dispatch({ type: "CREATE", payload: res.data }))
    .catch(error => console.log(error));
};

export const deletePost = id => dispatch => {};
