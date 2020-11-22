import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  return (
    <div className="ui form">
      <div className="fild">
        <label>Enter search term</label>
        <input
          value={term}
          type="text"
          placeholder="Search..."
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
