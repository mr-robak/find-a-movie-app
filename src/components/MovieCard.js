import "./MovieCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { title, year, img, imdbID } = props;

  return (
    <div className="MovieCard">
      <Link to={`/movie/${imdbID}`} style={{ textDecoration: "none" }}>
        <img src={img} alt=""></img>
        <h5>{title}</h5>
        <p>{year}</p>
      </Link>
    </div>
  );
}
