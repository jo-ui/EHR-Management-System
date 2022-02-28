import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  //   console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    const timeoutID = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {results.map((result) => {
          return (
            <div key={result.pageid} className="item">
              <div className="right floated content">
                <a
                  className="ui button"
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                  Go
                </a>
              </div>
              <div className="content">
                <div className="header">{result.title}</div>
                <span
                  dangerouslySetInnerHTML={{ __html: result.snippet }}
                ></span>
                {/* {result.snippet} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
