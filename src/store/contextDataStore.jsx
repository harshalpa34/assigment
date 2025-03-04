import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
const defaultStateValues = [
  {
    boxColour: "#2c1673",
    destinationCountry: "China",
    receiverName: "Harshal",
    weight: 12,
  },
  {
    boxColour: "#e39673",
    destinationCountry: "Brazil",
    receiverName: "Mayur",
    weight: 15,
  },
  {
    boxColour: "#2c9613",
    destinationCountry: "Sweden",
    receiverName: "Shrikant",
    weight: 5,
  },
];
export const DataProvider = ({ children }) => {
  const [capturedData, setCapturedData] = useState(defaultStateValues);

  const addCapturedData = (data) => {
    setCapturedData((prevData) => [...prevData, data]);
  };

  return (
    <DataContext.Provider value={{ capturedData, addCapturedData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
