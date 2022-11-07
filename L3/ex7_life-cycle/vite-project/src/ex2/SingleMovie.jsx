import React from "react";
import styles from "./SingleMovie.module.css";

const SingleMovie = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <div>
        <h3>Name : {movie.name}</h3>
        <img src={`${movie.image.medium}`} />
      </div>
    </div>
  );
};

export default SingleMovie;
