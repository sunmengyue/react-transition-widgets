import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term
        }
      });
    };
    search();
  }, [term]);
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
