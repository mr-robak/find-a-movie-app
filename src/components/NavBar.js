import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div activeClassName="NavLink">
      <NavLink
        to="/"
        exact="true"
        activeStyle={{
          fontWeight: "bolder",
          color: "green",
        }}
      >
        Home
      </NavLink>
      <NavLink
        exact={true}
        to="/discover"
        activeStyle={{
          fontWeight: "bolder",
          color: "green",
        }}
      >
        Discover Movies
      </NavLink>
      <NavLink exact={true} to="/about" activeStyle={{ fontWeight: "bolder" }}>
        About
      </NavLink>
    </div>
  );
}
