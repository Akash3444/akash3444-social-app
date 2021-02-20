import axios from "axios";

const baseURI = "https://bd5hq.sse.codesandbox.io/user";

export const signUp = userData => dispatch => {
  axios
    .post(`${baseURI}/register`, userData)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: "SIGNUP",
        payload: res.data === true ? true : false
      });
    })
    .catch(error => console.log(error));
};

export const login = userData => dispatch => {
  console.log("Login data", userData);
  axios
    .post(`${baseURI}/login`, {
      username: userData.username,
      password: userData.pwd
    })
    .then(res => {
      localStorage.setItem("x-auth-token", res.data.token);
      dispatch({
        type: "LOGIN",
        payload: res.data
      });
    })
    .catch(error => console.log(error.message));
};

export const isValid = token => dispatch => {
  axios
    .get(`${baseURI}/istokenvalid/${token}`)
    .then(res => {
      dispatch({
        type: "ISVALID",
        payload: res.data
      });
    })
    .catch(error => console.log(error.message));
};

export const getData = token => dispatch => {
  axios.get(`${baseURI}`, { headers: { "x-auth-token": token } }).then(res =>
    dispatch({
      type: "GETDATA",
      payload: res.data
    })
  );
};

export const getPopularUsers = token => dispatch => {
  axios
    .get(`${baseURI}/popular`, { headers: { "x-auth-token": token } })
    .then(res =>
      dispatch({
        type: "POPULAR",
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
