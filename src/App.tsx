import './App.scss';
import Header from './components/Header/Header';
import MovieList from './features/movies/components/MovieList/MoviesList';



function App() {
  return (
    <div className="app">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;