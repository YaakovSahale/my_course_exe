import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../utils";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll(USERS_URL);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {users?.map((user) => {
          return (
            <li key={user.id}>
              {" "}
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
