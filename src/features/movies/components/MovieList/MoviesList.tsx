import './MoviesList.scss';
import data from '../../../../utils/data.json'
import MovieItem from '../MovieItem/MoviesItem';

export default function MovieList() {



  return (
    <div className="movie-list d-flex flex-wrap justify-content-cented">
      {data.movies.map((movie: any) => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
    </div>
  );
}