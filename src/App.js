import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";

import Home from "./Pages/Home/Home";
import Characters from "./Pages/Characters/Characters";
import Episodes from "./Pages/Episodes/Episodes";
import Locations from "./Pages/Locations/Locations";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Switch>
          <Route path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
