import React from "react";
import { useState } from "react";
import { getAll, updateUser } from "./utils";

const User = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({ fullName: "", email: "" });
  const userUrl = "https://jsonplaceholder.typicode.com/users";

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUser({ name: e.target.fullName.value, email: e.target.email.value });
    const resp = await updateUser(`${userUrl}/${userId}`, user);
    console.log(resp);
  };

  const getUser = async () => {
    const { data } = await getAll(`${userUrl}/${userId}`);
    setUser(data);
  };

  return (
    <div>
      User ID:{" "}
      <input type="number" onChange={(e) => setUserId(e.target.value)} />
      <button onClick={getUser}>Get Data</button>
      <br />
      <br />
      <form onSubmit={handleUpdate}>
        Name: <input name="fullName" type="text" />
        <br />
        Email: <input name="email" type="text" />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default User;
