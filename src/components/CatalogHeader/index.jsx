import React, { useState } from "react";
import { SelectItem } from "..";

import { allOptions } from "../../utils/filterOptions";
import "./CatalogHeader.scss";
import { sharesApi } from "../../utils/api";

const CatalogHeader = (props) => {
  const { setShares, shares } = props;

  const [selectedData, setSelectedData] = useState({
    riskLevel: "",
    tradingLevel: "",
    sharesCategory: "",
  });
  const [clear, setToggleClear] = useState(false);

  const updateSelectedData = (value) => {
    setSelectedData(value);
  };
  const handleApplyButtonClick = async () => {
    const { data } = await sharesApi.getAll();
    const objValues = Object.entries(selectedData).map((arr) => arr[1]);
    const filter = {};
    objValues[0] && (filter.riskLevel = objValues[0]);
    objValues[1] && (filter.tradingLevel = objValues[1]);
    objValues[2] && (filter.sharesCategory = objValues[2]);
    const filtered = data.filter(function (item) {
      for (let key in filter) {
        if (item[key] === undefined || item[key] !== filter[key]) return false;
      }
      return true;
    });
    setShares(filtered);
  };

  const handleSearchInput = (e) => {
    const query = e.target.value.toLowerCase();
    const searched = shares.filter((item) => {
      return item.brand.toLowerCase().includes(query);
    });
    setShares(searched);
  };

  const handleClearButtonClick = async () => {
    const { data } = await sharesApi.getAll();
    setSelectedData({
      riskLevel: "",
      tradingLevel: "",
      sharesCategory: "",
    });
    setToggleClear(!clear);
    setShares(data);
  };

  return (
    <div className="catalog-header">
      <h2>Filters:</h2>
      <div className="catalog-header__filters">
        {allOptions.map((item) => (
          <div key={item.name}>
            <SelectItem
              clear={clear}
              selectedData={selectedData}
              updateSelectedData={updateSelectedData}
              item={item}
            />
          </div>
        ))}
      </div>
      <input placeholder="Search by brand" onChange={handleSearchInput} />
      <button
        onClick={handleApplyButtonClick}
        className="catalog-header__button"
      >
        Apply
      </button>
      <button
        onClick={handleClearButtonClick}
        className="catalog-header__button"
      >
        Clear filter
      </button>
    </div>
  );
};

export default CatalogHeader;
