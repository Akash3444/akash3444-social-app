import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, isValid } from "../actions/user";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    pwd: ""
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user);

  const token = localStorage.getItem("x-auth-token");
  useEffect(() => {
    dispatch(isValid(token));
  }, [token]);

  useEffect(() => {
    if (user.isvalid === true) history.push("/");
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(userData));
    history.push("/");
  };

  return (
    <div className="d-flex vh-100 vw-100 justify-content-center align-items-center">
      <div className="auth__card bg-primary py-4 px-5 shadow-lg rounded w-100">
        <h2 className="text-white text-center mb-4"> Login </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="text-light form-label">
              Username
            </label>
            <input
              className="form-control shadow rounded-1 rounded-0 mb-4"
              autoComplete="false"
              name="username"
              id="username"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="pwd" className="text-light form-label">
              Password
            </label>
            <input
              className="form-control shadow rounded-1 rounded-0 mb-4"
              autoComplete="false"
              name="pwd"
              id="pwd"
              type="password"
              onChange={handleChange}
            />
          </div>
          <button className="auth__btn d-block w-50 mx-auto rounded-1 py-2 bg-warning bg-gradient shadow">
            Login
          </button>
          <p className="text-light text-center mt-2 fs-6">
            Don't have an account?{" "}
            <Link className="text-info" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
