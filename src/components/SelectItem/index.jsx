import React, { useEffect } from "react";
import Select from "react-select";

import "./SelectItem.scss";

const SelectItem = (props) => {
  const { item, updateSelectedData, selectedData, clear } = props;

  const onChange = (e) => {
    if (e) {
      selectedData[item.name] = e.value;
      updateSelectedData(JSON.parse(JSON.stringify(selectedData)));
    }
  };

  const selectInputRef = React.useRef();

  const handleClearButtonClick = () => {
    selectInputRef?.current.clearValue();
  };

  useEffect(() => {
    handleClearButtonClick();
  }, [clear]);

  return (
    <Select
      ref={selectInputRef}
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
