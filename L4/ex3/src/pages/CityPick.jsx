import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CityPick = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleNextBtn = () => {
    localStorage.setItem("city", city);
    navigate(`dataDisplay`);
  };
  return (
    <div>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value=""></option>
        <option value="HAIFA">HAIFA</option>
        <option value="TLV">TLV</option>
        <option value="ASHDOD">ASHDOD</option>
        <option value="HOLON">HOLON</option>
      </select>
      <button onClick={handleNextBtn}>Next</button>
    </div>
  );
};

export default CityPick;
