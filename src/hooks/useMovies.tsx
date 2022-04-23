import React, { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterfaces";

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>("/now_playing");
    const popularPromise = movieDB.get<MovieDBMoviesResponse>("/popular");
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>("/top_rated");
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>("/upcoming");

    const respPromise = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: respPromise[0].data.results,
      popular: respPromise[1].data.results,
      topRated: respPromise[2].data.results,
      upcoming: respPromise[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    //tiene todas las peticiones
    getMovies();
  }, []);
  return {
    //desestructuracion
    ...moviesState,
    isLoading,
  };
};
