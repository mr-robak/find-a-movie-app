import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviePage.css";

export default function MoviePage(props) {
  const [movieData, set_movieData] = useState({});

  console.log("Movie Page params: ", props);

  const routeParameters = useParams();
  console.log("routeParameters: ", routeParameters.imdb_id);

  useEffect(() => {
    async function fetchData() {
      const url = `http://www.omdbapi.com/?apikey=ef5d807a&i=${routeParameters.imdb_id}&plot=full%22`;
      const response = await axios.get(url);

      console.log("Axios fetched: ", response.data);
      set_movieData(response.data);
    }
    fetchData();
  }, [routeParameters.imdb_id]);

  console.log("!!!Downloaded movie data:", movieData);

  const {
    Title,
    Country,
    Director,
    Genre,
    // Language,
    Plot,
    Poster,
    Runtime,
    imdbRating,
    Year,
  } = movieData;
  return (
    <div className="MoviePage">
      <img src={Poster} alt="" />{" "}
      <div>
        <h2>{Title}</h2>
        <p>{Year}</p>
        <p>{Genre}</p>
        <br />
        <p>Director: {Director}</p>

        <p>Plot: {Plot}</p>

        <p>{Country}</p>
        <p>{Runtime}</p>
        <p>imdb rating: {imdbRating}</p>
        <p></p>
      </div>
    </div>
  );
}
