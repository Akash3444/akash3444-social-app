import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ searchQuery, searchedUsers }) => {
  return (
    <div className="mt-3">
      {searchQuery &&
      searchQuery !== "" &&
      searchedUsers &&
      searchedUsers.loading ? (
        <p className="text-center mt-5">
          <span className="spinner spinner-border text-light" />
        </p>
      ) : (
        searchedUsers &&
        searchedUsers.users &&
        searchedUsers.users.map(user => (
          <div
            key={user.id}
            className="mx-auto bg-light p-3 border-bottom shadow"
            style={{ maxWidth: "350px" }}
          >
            <Link to={`/${user.username}`}>{user.username}</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;
