import { useState } from "react";
import axios from "axios";

const User = () => {
  const [userDetails, setUserDetails] = useState({});
  let id = "";

  const getUserDetails = async (e) => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const { data: userDetails } = await axios.get(`${URL}/${id}`);
    setUserDetails(userDetails);

    if (userDetails.name.startsWith("E")) {
      const URL_T0DO = `https://jsonplaceholder.typicode.com/todos/?userId=${id}`;
      const { data: todoList } = await axios.get(URL_T0DO);
      setUserDetails({ ...userDetails, todoList });
    }
  };

  const todoListElement = (
    <ul>
      {userDetails.todoList?.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>User details</h1>

      <input
        type="text"
        onChange={(e) => {
          id = e.target.value;
        }}
      />
      <button onClick={getUserDetails}>show details</button>
      <br />
      <br />

      <p>name: {userDetails.name}</p>
      <p>email: {userDetails.email}</p>

      {userDetails.name?.startsWith("E") ? todoListElement : null}
    </div>
  );
};

export default User;
