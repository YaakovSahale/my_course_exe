import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [people, setPeople] = useState([]);

  return (
    <div>
      <h1>Parent component</h1>
      <ul>
        {people.map(({ firstName, age, city, isAdult }, i) => (
          <li key={i}>
            {firstName} is {age} years old, lives in {city} and he is an{" "}
            {isAdult ? null : "not"} Adult
          </li>
        ))}
      </ul>
      <Child />
    </div>
  );
};

export default Parent;
