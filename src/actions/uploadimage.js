import axios from "axios";

export const uploadImage = img => dispatch => {
  console.log("upload image action");
  dispatch({ type: "LOADING" });
  axios
    .post("https://bd5hq.sse.codesandbox.io/upload", img)
    .then(res =>
      dispatch({
        type: "SUCCESS",
        payload: res.data
      })
    )
    .catch(error => dispatch({ type: "ERROR", payload: error }));
};
