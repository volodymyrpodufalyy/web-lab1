import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Catalog } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
