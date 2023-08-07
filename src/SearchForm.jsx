import { useState } from "react";
import { useGlobalContext } from "./Context";

// const accessKey = Da1PuQx7vwaRwwghb6S7i4MC5uzzui7f2FG2bMaPFbg
// const secretKey = VB_AVVmhq5-RrI6ZFDRp66I7tIvkZHUO_xTXjrYs-m4

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    setSearchTerm(searchValue);
    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          id=""
          placeholder="cat"
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
