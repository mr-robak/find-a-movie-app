import React, { useState } from "react";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, setSearchState] = useState("idle");
  const [movies, setMovies] = useState([]);
  const searchStates = [
    { status: "idle", data: "" },
    { status: "searching", data: "" },
    { status: "done", data: "" },
  ];

  const search = async () => {
    setSearchState("searching");
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

    console.log("Success!", data);
    // const dataArray = Object.entries(data);
    console.log("downloadedData!!!!", data.Search);

    setSearchState("Done!");
    set_searchText("");
    setMovies(data.Search);
  };

  console.log(
    "ALL NEW MOVIES: ",
    movies.map((movie) => {
      return movie.Title;
    })
  );

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <p>{searchState}</p>
      <p>
        {movies.map((movie) => {
          return movie.Title;
        })}
      </p>
    </div>
  );
}
