import { Movie } from "../../models/Movie";
import style from './MovieDetails.module.scss';

interface MovieDetailsProps {
  selectedMovie: Movie;
}

export default function MovieDetails({ selectedMovie }: MovieDetailsProps) {
  return (
    <div id="movie-details-modal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {selectedMovie?.title} <small>({selectedMovie?.original})</small>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
            {/* <p>{selectedMovie?.genres.join(' • ')}</p> */}
          </div>
            <img src={selectedMovie?.poster} style={style} alt="" />

          <div className="modal-body">
            <h5>{selectedMovie?.details}</h5>
            <p>{selectedMovie?.desc}</p>
          </div>

        </div>
      </div>
    </div>
  );
}