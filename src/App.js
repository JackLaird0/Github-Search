import "./App.css";
import { Route } from "react-router-dom";
import { Home, RepoDetails } from "./pages";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/repository/:id">
        <RepoDetails />
      </Route>
    </div>
  );
}

export default App;
