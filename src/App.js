import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/navbar/navbar";
import Spinner from "./components/Spinner/Spinner";
import "./App.scss";

const Home = React.lazy(() => {
  return import("./Pages/Home/Home");
});

const Characters = React.lazy(() => {
  return import("./Pages/Characters");
});

const Episodes = React.lazy(() => {
  return import("./Pages/Episodes");
});

const Locations = React.lazy(() => {
  return import("./Pages/Locations");
});

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              path="/characters/c/:cName"
              render={(props) => <Characters {...props} />}
            />
            <Route
              path="/characters/e/:eId"
              render={(props) => <Characters {...props} />}
            />
            <Route
              path="/characters/l/:lid"
              render={(props) => <Characters {...props} />}
            />
            <Route
              path="/characters"
              render={(props) => <Characters {...props} />}
            />
            <Route
              path="/episodes"
              render={(props) => <Episodes {...props} />}
            />
            <Route
              path="/locations"
              render={(props) => <Locations {...props} />}
            />
            <Route path="/" render={(props) => <Home {...props} />} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
