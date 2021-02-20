import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfile,
  followUser,
  unfollowUser
} from "../actions/userprofile";

const UserProfile = () => {
  const url = useParams();
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.userProfile);

  useEffect(() => {
    console.log("Getting Profile");
    dispatch(
      getUserProfile(url.username, localStorage.getItem("x-auth-token"))
    );
  }, []);

  const handleClick = () => {
    if (!userProfile.data.following) {
      console.log("Follwing");
      dispatch(followUser(url.username, localStorage.getItem("x-auth-token")));
    } else {
      console.log("Unfollwing");
      dispatch(
        unfollowUser(url.username, localStorage.getItem("x-auth-token"))
      );
    }
  };

  return (
    <div>
      {userProfile.loading && (
        <div>
          <span className="spinner spinner-border text-info" />
        </div>
      )}

      {userProfile.error && <h1> Error in loading profile </h1>}

      {!userProfile.error && !userProfile.loading && (
        <div className="container">
          <div className="d-flex border w-100 px-5 py-4">
            {userProfile.data.profilePicture &&
              userProfile.data.profilePicture !== "" && (
                <img
                  src={`https://bd5hq.sse.codesandbox.io/image/${
                    userProfile.data.profilePicture
                  }`}
                />
              )}
            {userProfile.data.profilePicture === "" && (
              <div
                style={{ height: "7rem", width: "7rem", background: "#ccc" }}
                className="text-uppercase fs-1 fw-bold text-light d-flex justify-content-center align-items-center rounded-circle border shadow-sm"
              >
                {userProfile.data.username.substr(0, 1)}
              </div>
            )}
            <div className="ms-4">
              <h4> {userProfile.data.username} </h4>
              <span>
                Followers{" "}
                {userProfile.data.followersCount &&
                  userProfile.data.followersCount}
              </span>
              <span className="ms-4">
                Following{" "}
                {userProfile.data.followingCount &&
                  userProfile.data.followingCount}
              </span>
              <br />
              {!userProfile.data.selfProfile && (
                <button className="btn btn-primary mt-2" onClick={handleClick}>
                  {userProfile.data.following ? "Unfollow" : "Follow"}
                </button>
              )}
            </div>
          </div>
          {/* Post List */}
          <div className="row">
            {userProfile.data.posts &&
              userProfile.data.posts.length !== 0 &&
              userProfile.data.posts.map(post => (
                <div
                  key={post._id}
                  className="col-12 col-sm-12 col-md-6 col-lg-4"
                >
                  <img
                    src={`https://bd5hq.sse.codesandbox.io/image/${post.image}`}
                    className="d-block"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
