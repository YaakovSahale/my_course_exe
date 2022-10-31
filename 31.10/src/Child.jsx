import { useState } from "react";

const Child = () => {
  const [newPerson, setNewPerson] = useState({
    firstName: "",
    Age: "",
    City: "",
    isAdult: false,
  });

  const clickHandler = () => {
    setNewPerson();
  };
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h3>Child component</h3>

      <form>
        Name:
        <input
          type="text"
          onChange={(e) =>
            setNewPerson(...newPerson, { firstName: e.target.value })
          }
        />
        <br />
        Age:
        <input
          type="text"
          onChange={(e) =>
            setNewPerson(...newPerson, { firstName: e.target.value })
          }
        />
        <br />
        City:{" "}
        <select>
          <option value="TLV">TLV</option>
          <option value="Haifa">Haifa</option>
          <option value="Ashdod">Ashdod</option>
        </select>
        <br />
        is Adult: <input type="checkbox" name="" id="" />
        <br />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Child;
