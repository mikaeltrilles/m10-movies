import style from './MoviesItem.module.scss';


console.log(style);

export default function MovieItem({ movie }: any) {
  return (
    <div 
    className={`${style.card} card text-center m-2`}
    >
      <img className="card-img-top" src={movie.img} alt="Affiche du film" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <hr className="w-75 mx-auto" />
        <p className="card-text">{movie.desc}</p>
      </div>
    </div>
  );
}