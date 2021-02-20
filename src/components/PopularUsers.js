import React, { useEffect } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { getPopularUsers } from "../actions/user";

const PopularUsers = () => {
  const dispatch = useDispatch();
  const popularUsers = useSelector(state => state.user.popular);
  useEffect(() => {
    dispatch(getPopularUsers(localStorage.getItem("x-auth-token")));
    console.log(popularUsers);
  }, []);

  return (
    <div>
      <h2 className="section__heading fw-bold fs-4 text-primary text-center">
        Most Popular
      </h2>
      {popularUsers.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default PopularUsers;
