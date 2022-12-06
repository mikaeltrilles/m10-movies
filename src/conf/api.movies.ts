import axios from "axios";
import { Movie } from '../features/movies/models/Movie';


//  API URL
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWE4N2IwYjlmMTViOGIyOGYzYTY5Mjc1OTNhZDZiMCIsInN1YiI6IjYzNjA0Mjg3ZTE4ZTNmMDA5MDkzYTYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QQMFLBGO3LyOXNGcWvoNcrjffx6196_QGgkMDwYs_p4';


// Create a new instance of axios
export const urlApiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',

  },
  timeout: 4000,
});

// Add a request interceptor  (intercept the request before it is sent)
urlApiMovies.interceptors.request.use((req: any) => {
  req.headers['Authorization'] = `Bearer ${API_TOKEN}`;
  console.log('Starting Request', req);
  return req;
});

// Add a response interceptor (intercept the response before it is sent)
export const apiMovieMap = (moviesFromAPI: any[]) =>moviesFromAPI.map((m: any) => new Movie(
  String(m.id),
  m.title,
  `${m.release_date.split('-').reverse().join('-')} | ⭐️ ${m.vote_average} (${m.vote_count} votes)`,
  m.overview,
  `https://image.tmdb.org/t/p/w500${m.poster_path}`,
  `https://image.tmdb.org/t/p/w500${m.backdrop_path}`,
  String(m.original_title),
  m.genre_ids.map((g: any) => g.name).join(','),
  m.runtime,

));