import React, { useState } from "react";
import Select from "react-select";
import { countryData } from "../assets/data";

const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log("selectedCountry",selectedOption);
  };

  return (
    <div>
      <h1>Select Country and State</h1>
      <Select
        options={countryData}
        value={selectedCountry}
        onChange={handleCountrySelect}
        placeholder="Select a Country"
      />
    </div>
  );
};

export default SelectCountry;
