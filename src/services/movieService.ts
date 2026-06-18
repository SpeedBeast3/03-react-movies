import axios from "axios";
import type { Movie } from "../types/movie";

const API_TOKEN = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";



interface fetchMoviesProps {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (topic: string): Promise<Movie[]> => {
  const config = {
    params: {
      query: topic,
      page: 1,
      include_adult: "false",
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      accept: "application/json",
    },
  };

  const response = await axios.get<fetchMoviesProps>(
    `${BASE_URL}/search/movie`,
    config,
  );

  return response.data.results;
};
