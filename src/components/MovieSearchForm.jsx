import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const MovieSearchForm = ({ onSubmit }) => {
  // const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleChange = ({ target }) => {
    setSearchParams({ query: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    // reset();
  };

  // const reset = () => {
  //   setSearch("");
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
