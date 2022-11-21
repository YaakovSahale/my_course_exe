import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const namePick = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (firstName) return setIsDisable(false);
    setIsDisable(true);
  }, [firstName]);

  const handleNextBtn = () => {
    localStorage.setItem("firstName", firstName);
    navigate(`/cityPick`);
  };

  return (
    <div>
      <form onSubmit={handleNextBtn}>
        <label htmlFor="firstName">First name :</label>
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="lastName">Last name :</label>
        <input type="text" name="lastName" />
        <br />
        <br />
        <button onClick={handleNextBtn} disabled={isDisable}>
          Next
        </button>
      </form>
    </div>
  );
};

export default namePick;
