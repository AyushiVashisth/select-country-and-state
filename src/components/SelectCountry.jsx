import React, { useState } from "react";
import Select from "react-select";
import { countryData, stateData } from "../assets/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SelectCountry.css";

const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [stateOptions, setStateOptions] = useState([]);

  const handleCountrySelect = (selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log("selectedCountry", selectedOption);
    setStateOptions(stateData[selectedOption.value] || []);
  };

  const handleStateSelect = (selectedOption) => {
    setSelectedState(selectedOption);
    toast.info(`Selected State: ${selectedOption.label}`);
    setSelectedCountry(null);
    setSelectedState(null);
    setStateOptions([]);
  };

  return (
    <div className="selectCountryStateContainer">
      <ToastContainer />
      <h1>Select Country and State</h1>
      <Select
        options={countryData}
        value={selectedCountry}
        onChange={handleCountrySelect}
        placeholder="Select a Country"
        className="selectContainer"
      />
      {selectedCountry && (
        <Select
          options={stateOptions}
          value={selectedState}
          onChange={handleStateSelect}
          placeholder="Select a State"
          className="selectContainer"
        />
      )}
    </div>
  );
};

export default SelectCountry;
