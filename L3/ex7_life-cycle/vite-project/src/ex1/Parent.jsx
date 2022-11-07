import { useState } from "react";
import Child from "../ex1/Child";

const Parent = () => {
  const [userId, setUserId] = useState();

  return (
    <>
      enter user ID:{" "}
      <input type="text" onChange={(e) => setUserId(e.target.value)} />
      <Child userId={userId} />
    </>
  );
};

export default Parent;
