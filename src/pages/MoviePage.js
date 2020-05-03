import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage(props) {
  const [movieData, set_movieData] = useState({});

  console.log("Movie Page params: ", props);

  useEffect(() => {
    async function fetchData() {
      const url =
        "http://www.omdbapi.com/?apikey=ef5d807a&i=tt0076759&plot=full%22";
      const response = await axios.get(url);

      console.log("Axios fetched: ", response.data);
      set_movieData(response.data);
    }
    fetchData();
  }, []);
  const { Title } = movieData;
  return (
    <div>
      <h1>{Title}</h1>
    </div>
  );
}
