import { useState, useEffect } from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MovieDetails from './features/movies/components/MovieDetails/MovieDetails';
import { Movie } from './features/movies/models/Movie';
import data from './utils/data.json';
import MovieList from './features/movies/components/MovieList/MoviesList';
import { urlApiMovies, apiMovieMap } from './conf/api.movies';
import SearchBar from './features/movies/components/SearchBar/SearchBar';




function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(movies[0]);


  function getData() {
    urlApiMovies.get('/discover/movie/?language=fr-FR')
      .then(res => res.data?.results)
      .catch(console.error)
      .then(moviesFromAPI => {
        if (!moviesFromAPI) throw new Error("Pas de fims !");
        console.log(moviesFromAPI);
        const movies = apiMovieMap(moviesFromAPI);

        console.log(movies);

        setMovies(movies);
        setSelectedMovie(movies[0]);
      });
  }
  useEffect(getData, []);


  function updateSelectedMovie(id: string) {
    setSelectedMovie(
      movies.find(m => m._id === id)
    );
  }

  return (
    <div className="app">
      <Header />
      {data.movies.length ? (
        <>
          <div className="d-flex justify-content-center p-4">
            <SearchBar setMovies={setMovies} />
          </div>
          <MovieList
            movies={movies}
            updateSelectedMovie={updateSelectedMovie} />
          {selectedMovie && <MovieDetails selectedMovie={selectedMovie} />}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;