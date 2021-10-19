import React, { useState } from "react";
import "./Home.scss";
import { generateApiQuery, useFetchRepos } from "../../utilities";
import { Search } from "../../components";

function Home() {
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

  console.log(response);

  return (
    <div className="home">
      <Search handleSubmit={handleSubmit} handleChange={compileQueryInfo} />
    </div>
  );
}

export { Home };
