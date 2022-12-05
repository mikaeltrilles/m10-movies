import axios from "axios";


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