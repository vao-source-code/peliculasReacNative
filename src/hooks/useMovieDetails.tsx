import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterfaces";

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  movieFull?: MovieFull;
}
export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
      isLoading : true ,
      movieFull : undefined,
      cast: []

  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castDetailsPromise = movieDB.get<CreditsResponse>(
      `/${movieId}/credits`
    );

    const [movieDetailsResp, castDetailsResp] = await Promise.all([
      movieDetailsPromise,
      castDetailsPromise,
    ]);

    setState({
        isLoading: false,
        movieFull: movieDetailsResp.data,
        cast: castDetailsResp.data.cast,
    });

  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
      ...state

  };
};
