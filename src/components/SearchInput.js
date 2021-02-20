import React from "react";
import searchIcon from "./svg/searchIcon.svg";

const SearchInput = ({handleChange, searchQuery}) => {
  return (
    <div
      className="d-flex border mx-auto rounded justify-content-around align-items-center"
      style={{ backgroundColor: "#f0f8ff", maxWidth: "300px" }}
    >
      <input
        className="form-control bg-transparent"
        placeholder="Search user..."
        style={{ boxShadow: "none" }}
        onChange={handleChange}
        value={searchQuery}
      />
      <img src={searchIcon} height="15px" width="15px" className="mx-2" />
    </div>
  );
};

export default SearchInput;
