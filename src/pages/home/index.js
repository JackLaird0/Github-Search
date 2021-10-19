import React, { useState } from "react";

import { SearchResults } from "../";
import { Search } from "../../components";
import { generateApiQuery, useFetchRepos } from "../../utilities";

import "./Home.scss";

function Home({ data, setData, setSelectedRepo }) {
  const [queryInfo, setQueryInfo] = useState({});
  const [endpoint, setEndpoint] = useState(null);

  const response = useFetchRepos(endpoint);

  const compileQueryInfo = (name, value) => {
    setQueryInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEndpoint(generateApiQuery(queryInfo));
  };

  return (
    <div className="home">
      <Search handleSubmit={handleSubmit} handleChange={compileQueryInfo} />
      <SearchResults
        response={response}
        setData={setData}
        setSelectedRepo={setSelectedRepo}
        data={data}
      />
    </div>
  );
}

export { Home };
