
import MovieItem from '../MovieItem/MoviesItem';


export default function MovieList({movies=[]}: any) {



  return (
    <div className="movie-list d-flex flex-wrap justify-content-cented">
      {movies.map((movie: any) => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
    </div>
  );
}