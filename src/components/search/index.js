import React from "react";

import "./Search.scss";

function Search({ handleChange, handleSubmit }) {
  const onChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  return (
    <div className="search">
      <div className="form-container">
        <div className="filter-options">
          <div className="select-container">
            <label>Sort By:</label>
            <select name="filter" onChange={(e) => onChange(e)}>
              <option value="">Best Match</option>
              <option value="stars"> Stars</option>
            </select>
          </div>
          <div className="select-container">
            <label>Language:</label>
            <select name="language" onChange={(e) => onChange(e)}>
              <option value=""> Show All </option>
              <option value="html">HTML</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="css">CSS</option>
              <option value="php">PHP</option>
              <option value="ruby">Ruby</option>
              <option value="c#">C#</option>
              <option value="typescript">TypeScript</option>
              <option value="c++">C++</option>
            </select>
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="text"
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={(e) => onChange(e)}
          />
          <button type="submit" className="submit-button">
            Go
          </button>
        </form>
      </div>
      <div className="divider" />
    </div>
  );
}

export { Search };
