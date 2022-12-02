import { Movie } from '../../models/Movie';
import MovieItem from '../MovieItem/MoviesItem';


interface MovieListProps {
  movies: any[];
  updateSelectedMovie: Function;
}

export default function MovieList({
  movies = [],
  updateSelectedMovie,
}: MovieListProps) {
  return (
    <div className="movie-list d-flex flex-wrap justify-content-center">

      {movies.map((movie: Movie) => (
        <MovieItem
          key={movie._id}
          updateSelectedMovie={() => updateSelectedMovie(movie._id)}
          movie={movie} />
      ))}

    </div>
  );
}