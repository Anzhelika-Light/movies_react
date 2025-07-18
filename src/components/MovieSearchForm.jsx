import { useState } from "react";

const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={search} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
