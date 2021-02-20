import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import User from "./components/User";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Search from "./components/Search";
import CreatePost from "./components/CreatePost";
import UserProfile from "./components/UserProfile";
import PostList from "./components/PostList";
import PopularUsers from "./components/PopularUsers";
import { isValid, getData } from "./actions/user";

export default function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("x-auth-token");
  const history = useHistory();
  const user = useSelector(state => state.user);
  useEffect(() => {
    console.log("Validating token");
    if (token !== "undefined" && token && token !== "") {
      dispatch(isValid(token));
    } else {
      history.push("/login");
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (!user.data.username) {
      dispatch(getData(token));
    }
  }, [user, dispatch]);

  return (
    <div className="overflow-hidden">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <Navbar />
                <Search />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 order-1 order-md-0 col-md-4 col-lg-3 p-3 vh-md-100">
                      <h2 className="section__heading fw-bold fs-4 text-primary text-center">
                        Friend Suggesion
                      </h2>
                      <User />
                      <User />
                      <User />
                      <User />
                    </div>
                    <PostList />
                    <div className="col-12 col-md-3 p-3 d-none d-lg-block vh-md-100">
                      <PopularUsers />
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route
          exact
          path="/search"
          render={() => (
            <>
              <Navbar /> <Search />
            </>
          )}
        />
        <Route
          exact
          path="/search/:query"
          render={() => (
            <>
              <Navbar /> <Search />
            </>
          )}
        />
        <Route exact path="/post/create" component={CreatePost} />
        <Route
          exact
          path="/:username"
          render={() => {
            return (
              <>
                <Navbar />
                <UserProfile />
              </>
            );
          }}
        />
      </Switch>
    </div>
  );
}
