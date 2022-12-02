import './App.module.scss';
import Header from './components/Header/Header';
import MovieList from './features/movies/components/MovieList/MoviesList';
import Loading from './components/Loading/Loading';
import data from './utils/data.json';




function App() {
  return (
    <div className="app">
      <Header />
      {/* Le temps que l'on dispose des données on affiche un loader */}
      {data.movies.length ? (
        <MovieList movies={data.movies} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;