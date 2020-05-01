import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/discover">Discover Movies</NavLink>
      <NavLink to="/about">About this website</NavLink>
    </div>
  );
}
