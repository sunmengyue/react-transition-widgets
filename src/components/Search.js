import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term
        }
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  const resultsList = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <div className="description">{result.snippet}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="ui container">
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
      <div className="ui celled list">{resultsList}</div>
    </div>
  );
};

export default Search;
