import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/post";
import Post from "./Post";

const PostList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(localStorage.getItem("x-auth-token")));
  }, []);
  const posts = useSelector(state => state.post);

  return (
    <div className="posts col-12 col-md-8 col-lg-6 px-4 mt-2">
      <div className="row justify-content-center w-100 m-0 px-sm-5 px-md-auto px-lg-5">
        {posts.loading && (
          <span className="spinner spinner-border text-primary" />
        )}
        {posts.error && <p>Error in loading feed</p>}
        {posts.posts.map(({ _id, caption, image, author }, index) => (
          <Post
            key={_id}
            id={_id}
            caption={caption}
            image={image}
            author={author}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
