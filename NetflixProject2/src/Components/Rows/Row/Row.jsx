

import React, { useEffect, useRef, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios.jsx";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const rowRef = useRef(null);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getMovies = async () => {
      try {
        const request = await axios.get(fetchUrl);

        // Only show 10 movies
        setMovie(request.data.results.slice(0, 10));
      } catch (error) {
        console.log("error", error);
      }
    };

    getMovies();
  }, [fetchUrl]);

  // Check if we are at the beginning or end
  const checkScroll = () => {
    const row = rowRef.current;

    if (!row) return;

    setCanScrollLeft(row.scrollLeft > 5);

    setCanScrollRight(row.scrollLeft + row.clientWidth < row.scrollWidth - 5);
  };

  useEffect(() => {
    const row = rowRef.current;

    if (!row) return;

    checkScroll();

    row.addEventListener("scroll", checkScroll);

    return () => {
      row.removeEventListener("scroll", checkScroll);
    };
  }, [movies]);

  // Scroll exactly one movie
  const scrollRight = () => {
    const row = rowRef.current;

    if (!row) return;

    const movie = row.querySelector(".row__movie");

    if (movie) {
      const movieWidth = movie.offsetWidth + 15;

      row.scrollBy({
        left: movieWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const row = rowRef.current;

    if (!row) return;

    const movie = row.querySelector(".row__movie");

    if (movie) {
      const movieWidth = movie.offsetWidth + 15;

      row.scrollBy({
        left: -movieWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__container">
        {/* LEFT BUTTON */}
        {canScrollLeft && (
          <button className="row__arrow row__arrowLeft" onClick={scrollLeft}>
            &#10094;
          </button>
        )}

        {/* MOVIES */}
        <div className="row__posters" ref={rowRef}>
          {movies.map((movie, index) => (
            <div className="row__movie" key={movie.id || index}>
              {/* NUMBER */}
              <span className="row__number">{index + 1}</span>

              {/* POSTER */}
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
                className={`row__poster ${
                  isLargeRow ? "row__posterLarge" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        {canScrollRight && (
          <button className="row__arrow row__arrowRight" onClick={scrollRight}>
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
};

export default Row;
