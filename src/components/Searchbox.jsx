import { useState } from "react";

const SearchBox = ({ queryCallback }) => {
  const [query, setQuery] = useState("");
  function handleQuery(event) {
    setQuery(event.target.value);
    queryCallback(event.target.value);
  }
  function handleClear() {
    setQuery("");
    queryCallback("");
  }
  return (
    <div>
      <label htmlFor="query">What do u wanna Search</label>
      <input
        type="text"
        id="query"
        name="query"
        value={query}
        onChange={handleQuery}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
export default SearchBox;
