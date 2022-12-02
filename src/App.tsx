import { useState } from 'react';
import './App.module.scss';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MovieDetails from './features/movies/components/MovieDetails/MovieDetails';
import { Movie } from './features/movies/models/Movie';
import data from './utils/data.json';
import MovieList from './features/movies/components/MovieList/MoviesList';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(data.movies[0]);

  function updateSelectedMovie(id: string) {
    setSelectedMovie(
      data.movies.find(m => m._id === id)
    );
  }

  return (
    <div className="app">
      <Header />
      {data.movies.length ? (
        <>
          <MovieList
            movies={data.movies}
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