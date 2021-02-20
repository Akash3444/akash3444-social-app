import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import bellIcon from "./svg/bellIcon.svg";
import searchIcon from "./svg/searchIcon.svg";
import homeIcon from "./svg/homeIcon.svg";
import plusIcon from "./svg/plusIcon.svg";
import { searchDisplay } from "../actions/searchdisplay";

const Navbar = () => {
  const user = useSelector(state => state.user);
  const username = user.data.username;
  const profilePicture = user.data.profilePicture;
  const searchDisp = useSelector(state => state.searchDisplay.display);
  const dispatch = useDispatch();
  const history = useHistory();
  const displaySearchIcon = () => {
    console.log("Toggling Search");
    if (searchDisp === "d-none") {
      dispatch(searchDisplay("d-block"));
    } else {
      dispatch(searchDisplay("d-none"));
    }
  };

  return (
    <nav className="navbar border-bottom shadow-sm bg-white py-2 px-4 position-relative">
      <Link to="/" className="navbar-brand p-1 text-primary">
        <span className="m-0 fw-bold">Social App</span>
      </Link>
      <div className="navbar__items d-flex align-items-center">
        <span className="c-pointer text-primary ms-4">
          <img src={homeIcon} height="23px" width="23px" />
        </span>
        <span
          className="c-pointer text-secondary ms-4"
          onClick={displaySearchIcon}
        >
          <img src={searchIcon} height="20px" width="20px" />
        </span>
        <span className="c-pointer text-secondary ms-4">
          <img src={bellIcon} height="25px" width="25px" />
        </span>
        <span
          className="c-pointer ms-4"
          onClick={() => history.push("/post/create")}
        >
          <img src={plusIcon} height="25px" width="25px" />
        </span>
        <div className="ms-4 d-flex align-items-center">
          {profilePicture !== "" && profilePicture ? (
            <img src={profilePicture} />
          ) : (
            <button
              className="navbar__avatar c-pointer badge shadow-sm rounded-circle me-2 p-0"
              type="button"
              style={{
                height: "30px",
                width: "30px",
                lineHeight: "30px",
                border: "1px solid #7f00ff",
                color: "#7f00ff",
                background: "#eee"
              }}
            >
              {username && username.substr(0, 1).toUpperCase()}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
