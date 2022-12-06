import { Formik } from 'formik';
import { apiMovieMap, urlApiMovies } from '../../../../conf/api.movies';

interface InitialValues {
  query: string,
  language: 'fr-FR'|'en-US'|'de-DE',
}

export default function SearchBar({ setMovies }: any) {

  const initialValues: InitialValues = {
    query: '',
    language: 'fr-FR',
  };

  async function onSubmit(values: InitialValues, actions: any) {
    if (!values.query) return alert('Le champ doit être rempli !');

    const query = '?' + Object.entries(values)
      .map(([k, v]) => `${k}=${v}`)
      .join('&');
    
    try {
      let movies = await urlApiMovies
        .get('/search/movie' + query)
        .then(res => res.data?.results);
      setMovies(
        apiMovieMap(movies)
      );
      // je reset le formulaire pour que l'utilisateur puisse faire une nouvelle recherche
      actions.resetForm();
    }
    catch(e) {
      console.error(e);
    }
  }
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
        {({ handleSubmit, handleChange }) => (
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              name="query"
              type="text"
              onChange={handleChange}
              placeholder="Recherche..." />
            <select name="language" onChange={handleChange}>
              <option value="fr-FR">🇫🇷 France</option>
              <option value="en-US">🇺🇸 Anglais</option>
              <option value="de-DE">🇩🇪 Allemand</option>
            </select>
            <button 
            className="btn btn-success mx-1"
            type='submit'
            >
              Go !
            </button>
          </form>
        )}
    </Formik>
  );
}