import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      activeClassName="NavLink"
      style={{
        color: "white",
        backgroundColor: "lightgreen",
        padding: 0.5 + "em",
        margin: 0.2 + "em",
      }}
    >
      <NavLink
        to="/"
        exact="true"
        activeStyle={{
          fontWeight: "bolder",
          color: "yellow",
        }}
        style={{
          color: "white",
          backgroundColor: "lightgreen",
          padding: 0.5 + "em",
          margin: 0.2 + "em",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/discover"
        activeStyle={{
          fontWeight: "bolder",
          color: "yellow",
        }}
        style={{
          color: "white",
          backgroundColor: "lightgreen",
          padding: 0.5 + "em",
          margin: 0.2 + "em",
        }}
      >
        Discover Movies
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={{ fontWeight: "bolder", color: "yellow" }}
        style={{
          color: "white",
          backgroundColor: "lightgreen",
          padding: 0.5 + "em",
          margin: 0.2 + "em",
        }}
      >
        About
      </NavLink>
    </div>
  );
}
