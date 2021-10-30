import React, { useState } from "react";
import Select from "react-select";

import "./SelectItem.scss";

const SelectItem = (props) => {
  const { item, updateSelectedData, selectedData } = props;

  const onChange = (e) => {
    selectedData[item.name] = e.value;
    updateSelectedData(JSON.parse(JSON.stringify(selectedData)));
  };

  return (
    <Select
      placeholder={`Select ${item.label}`}
      className="catalog-header__filter"
      options={item.value}
      isSearchable={false}
      onChange={onChange}
      isMulti={false}
    />
  );
};

export default SelectItem;
