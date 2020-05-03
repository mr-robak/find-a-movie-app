import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "./DiscoverMoviesPage.css";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, setSearchState] = useState("Search for a movie!");
  const [movies, setMovies] = useState([]);

  const search = async () => {
    setSearchState("Searching...");
    // setSearchState(
    //   <img
    //     style={{ height: 20 + "px" }}
    //     src="./loading.gif"
    //     alt=""
    //   />
    // );
    console.log("Start searching for:", searchText);

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // Option A: use the browser-native fetch function
    const data = await fetch(
      `https://omdbapi.com/?apikey=ef5d807a&s=${queryParam}`
    ).then((r) => r.json());

    // Option B: use the `axios` library like we did on Tuesday
    // const data = await axios.get(
    //   `https://omdbapi.com/?apikey=ef5d807a&s=${queryParam}`
    // );

    // const dataArray = Object.entries(data);
    console.log("Success! downloadedData= :", data.Search);

    setSearchState(`Searched for: "${searchText}"`);
    set_searchText("");
    setMovies(data.Search);
  };

  // console.log(
  //   "ALL NEW MOVIES: ",
  //   movies.map((movie) => {
  //     return movie.Title;
  //   })
  // );

  return (
    <div className="DiscoverMoviesPage">
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <p>{searchState}</p>

      <div className="CardWrapper">
        {movies.map((movie) => {
          const { Title, Year, Poster, imdbID } = movie;

          return (
            <MovieCard title={Title} year={Year} img={Poster} imdbID={imdbID} />
          );
        })}
      </div>
    </div>
  );
}

//<MovieCard title={title} year={}/>
// {movies.map((movie) => {
//   return movie.Title;
// })}
