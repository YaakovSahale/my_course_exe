import React from "react";

const DataDisplay = () => {
  return (
    <div>
      <ul>
        <li>{localStorage.getItem("firstName")}</li>
        <li>{localStorage.getItem("city")}</li>
      </ul>
    </div>
  );
};

export default DataDisplay;
