import React, { useState, useEffect } from "react";

import { SharesList } from "./components";
import { sharesApi } from "./utils/api";

const App = () => {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    sharesApi.getAll().then(({ data }) => setShares(data));
  }, []);

  return (
    <div className="wrapper">
      <header class="header">
            <div class="header__inner-title">
              <div>
                <h1>Stock Market</h1>
                <h2>Octobert shares</h2>
              </div>
            </div>
      </header>
      <main>
        <SharesList shares={shares} />
      </main>
    </div>
  );
};

export default App;
