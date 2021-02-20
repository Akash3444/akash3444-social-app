import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchUsers } from "../actions/searchuser";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchDisplayValue = useSelector(state => state.searchDisplay.display);
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const searchedUsers = useSelector(state => state.searchUsers);
  const token = localStorage.getItem("x-auth-token");
  useEffect(() => {
    searchQuery &&
      searchQuery !== "" &&
      dispatch(searchUsers(searchQuery, token));
    console.log(searchedUsers);
  }, [token, searchQuery]);

  return (
    <div className={`${searchDisplayValue} search__result p-4`}>
      <SearchInput handleChange={handleChange} searchQuery={searchQuery} />
      <h2 className="text-center fw-normal text-white mt-4">
        {searchQuery ? `Search results for '${searchQuery}'` : null}
      </h2>
      {searchQuery && searchQuery !== "" && (
        <SearchResult searchQuery={searchQuery} searchedUsers={searchedUsers} />
      )}
    </div>
  );
};

export default Search;
