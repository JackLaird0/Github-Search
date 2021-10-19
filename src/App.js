import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Home, RepoDetails } from "./pages";

function App() {
  const [data, setData] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);

  return (
    <div className="App">
      <Route exact path="/">
        <Home setSelectedRepo={setSelectedRepo} data={data} setData={setData} />
      </Route>
      <Route path="/repository/:id">
        <RepoDetails />
      </Route>
    </div>
  );
}

export default App;
