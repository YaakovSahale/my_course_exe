import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import SingleMovie from "./SingleMovie";
import styles from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const moviesUrl = `https://api.tvmaze.com/shows`;

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(moviesUrl);
      setMovies(data.splice(0, 10));
    };

    getMovies();
  }, []);

  return (
    <div className={styles.moviesContainer}>
      <h1>MOVIES</h1>
      {movies.map((movie, i) => (
        <SingleMovie movie={movie} key={i} />
      ))}
    </div>
  );
};

export default Movies;
