import { useState } from "react";

const INITIAL_STATE = {
  search: "",
};

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...INITIAL_STATE });
  };

  const { search } = state;

  return (
    <form onSubmit={handleSubmit}>
      <input name="search" value={search} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
