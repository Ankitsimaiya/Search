import React, { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  // const [count,setCount] = useState(0)

  const SearchItems = () =>{
    
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          return setSearch(e.target.value);
        }}
      />
      <button onClick={() => {SearchItems}}>submit</button>
    </div>
  );
}

export default SearchBar;
