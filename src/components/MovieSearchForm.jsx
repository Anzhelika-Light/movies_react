import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const MovieSearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    // reset();
  };

  // const reset = () => {
  //   setSearch("");
  // };

  const updateQueryString = (e) => {
    const nextParams = e.target.value !== "" ? { query: e.target.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={updateQueryString} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
