import React, {useState, useEffect} from 'react'


import { SharesList } from "../../components";
import { sharesApi } from "../../utils/api";

const Catalog = () => {

  
  const [shares, setShares] = useState([]);

  useEffect(() => {
    sharesApi.getAll().then(({ data }) => {
      setShares(data);
    });
  }, []);

  return (
    <div>
      <SharesList shares={shares} />
    </div>
  )
}

export default Catalog;
