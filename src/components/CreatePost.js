import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../actions/uploadimage";
import { createPost } from "../actions/post";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [postImg, setpostImg] = useState("");

  const dispatch = useDispatch();
  const img = useSelector(state => state.uploadImage);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      createPost(
        { caption, img: img.imgData.filename },
        localStorage.getItem("x-auth-token")
      )
    );
  };

  useEffect(() => {
    let formData = new FormData();
    formData.append("img", document.getElementById("img").files[0]);
    if (postImg && postImg !== "") {
      console.log(formData);
      dispatch(uploadImage(formData));
    }
  }, [postImg]);

  useEffect(() => {
    console.log(img ? img.imgData : null);
  }, [img]);

  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div
        className="border bg-white w-100 shadow-sm"
        style={{ maxWidth: "400px" }}
      >
        <h1 className="text-center fs-3 mb-3 py-3 text-primary border-bottom">
          Create Post
        </h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="px-4 pt-2 pb-4"
        >
          <div>
            <label>Caption</label>
            <input
              type="text"
              name="caption"
              className="mt-2 border bg-white form-control w-80"
              style={{ boxShadow: "none" }}
              onChange={e => setCaption(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label>Image</label>
            <input
              type="file"
              name="img"
              id="img"
              className="mt-2 border bg-white form-control w-80"
              style={{ boxShadow: "none" }}
              onChange={e => setpostImg(e.target.value)}
            />
          </div>
          {img && img.loading ? (
            <span>Uploading...</span>
          ) : (
            <img
              src={`https://bd5hq.sse.codesandbox.io/image/${
                img.imgData.filename
              }`}
              className="d-block mx-auto mw-100 mt-3 shadow"
            />
          )}
          <button className="btn btn-primary d-block mx-auto mt-4">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
