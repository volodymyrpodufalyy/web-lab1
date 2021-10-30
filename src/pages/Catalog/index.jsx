import React, { useState, useEffect } from "react";

import { CatalogHeader, SharesList } from "../../components";
import { sharesApi } from "../../utils/api";

const Catalog = () => {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    sharesApi.getAll().then(({ data }) => {
      setShares(data);
    });
  }, []);

  return (
    <React.Fragment>
      <CatalogHeader setShares={setShares} shares={shares} />
      <SharesList shares={shares} />
    </React.Fragment>
  );
};

export default Catalog;
