import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from 'react-router-dom';
import { getById } from '../utils';

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getById(USERS_URL, id);
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address?.city}</li>
      </ul>

      <Link to={"posts"}>posts</Link>
      <br />
      <Link to={"todos"}>todos</Link>
      <Outlet />
    </div>
  );
};

export default User;
