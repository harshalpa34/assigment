import React, { useCallback, useState } from "react";
import { useDataContext } from "../store/contextDataStore";

const Table = () => {
  const { capturedData } = useDataContext();
  console.log(capturedData);
  const calculateShippingCost = useCallback((weight, country) => {
    const countryMultipliers = {
      Sweden: 7.35,
      China: 11.53,
      Brazil: 15.63,
      Australia: 50.09,
    };
    return (weight * countryMultipliers[country] || 0).toFixed(2);
  }, []);

  return (
    <div className="table-container">
      <h2>Captured Inputs</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Receiver Name</th>
            <th>Weight (kg)</th>
            <th>Box Colour</th>
            <th>Destination Country</th>
            <th>Calculated Shipping Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          {capturedData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.receiverName}</td>
              <td>{entry.weight}</td>
              <td>
                <div
                  className="color-box"
                  style={{ backgroundColor: entry.boxColour }}
                />
              </td>
              <td>{entry.destinationCountry}</td>
              <td>
                {calculateShippingCost(entry.weight, entry.destinationCountry)}{" "}
                INR
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
