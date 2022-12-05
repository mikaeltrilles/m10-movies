import { Formik, Form, Field, ErrorMessage } from 'formik';


export default function SearchBar() {
  return (
    <form className="d-flex">
      <input type="text" placeholder="Recherche..." />
      <select>
        <option value="fr-FR">🇫🇷 France</option>
        <option value="en-US">🇺🇸 Anglais</option>
        <option value="de-DE">🇩🇪 Allemand</option>
      </select>
      <button className="btn btn-success mx-1">Go !</button>
    </form>
  );
}