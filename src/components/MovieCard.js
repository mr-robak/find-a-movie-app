import "./MovieCard.css";
import React from "react";

export default function MovieCard(props) {
  const { title, year, img } = props;
  return (
    <div className="MovieCard">
      <img src={img} alt=""></img>
      <h5>{title}</h5>
      <p>{year}</p>
    </div>
  );
}
