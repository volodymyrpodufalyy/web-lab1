import React from "react";

import { SharesList, Header, Intro, Footer } from "./components";


const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Intro />
        <SharesList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
