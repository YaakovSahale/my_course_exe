import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome !!</h1>
      <button onClick={() => navigate("/namePick")}>Start</button>
    </div>
  );
};

export default Welcome;
