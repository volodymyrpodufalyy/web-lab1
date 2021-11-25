import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Catalog, Share, Cart, Checkout, SuccessOrder } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/catalog/:id" component={Share} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/successOrder" component={SuccessOrder} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
