import "./App.css";
import { Title } from "./styles";
import movies from "./movies";
import List from "./components/List";
import { useState } from "react";
import Details from "./components/Details";
import { Route, Switch } from "react-router";

function App() {
  const [_movies, setMovies] = useState(movies);

  return (
    <div>
      <Switch>
        <Route path="/movies/:movieSlug">
          <Details movies={_movies} />
        </Route>
        <Route path="/movies">
          <List movies={_movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
