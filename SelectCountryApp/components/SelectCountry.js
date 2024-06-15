import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Toast from "react-native-toast-message";
import { countryData, stateData } from "../assets/data";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [stateOptions, setStateOptions] = useState([]);

  const handleCountryChange = (value) => {
    const selectedOption = countryData.find((item) => item.value === value);
    setSelectedCountry(selectedOption);
    setStateOptions(stateData[selectedOption.value] || []);
  };

  const handleStateChange = (value) => {
    const selectedOption = stateOptions.find((item) => item.value === value);
    setSelectedState(selectedOption);
    Toast.show({
      type: "info",
      text1: `Selected State: ${selectedOption.label}`
    });
    setSelectedCountry(null);
    setSelectedState(null);
    setStateOptions([]);
  };

  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View style={styles.container}>
        <Text style={styles.title}>Country and State Selector</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={handleCountryChange}
            items={countryData}
            placeholder={{ label: "Select a Country", value: null }}
          />
        </View>
        {selectedCountry && (
          <RNPickerSelect
            onValueChange={handleStateChange}
            items={stateOptions}
            placeholder={{ label: "Select a State", value: null }}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ad2626",
    // backgroundColor: '#f0f0f0',
    padding: 20,
    marginTop: 100
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333"
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 20
  }
});

export default App;
