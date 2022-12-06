// import { MouseEventHandler } from 'react';
import style from './MoviesItem.module.scss';

interface MovieItemProps {
  movie: any;
  updateSelectedMovie: Function | any;
}

export default function MovieItem({
  movie,
  updateSelectedMovie
}: MovieItemProps) {
  return (
    <div
      onClick={updateSelectedMovie}
      style={{ cursor: 'pointer' }}
      data-bs-target="#movie-details-modal"
      data-bs-toggle="modal"
      className={`card text-center m-2 ${style.card}`}>
      <img className="card-img-top" src={movie.img} alt="Affiche du film" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <hr className="w-75 mx-auto" />
        <p className="card-text">{movie.desc}</p>
      </div>
    </div>
  );
}