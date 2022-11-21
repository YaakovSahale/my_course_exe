import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserItems } from "../utils";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const Posts = () => {
  const [todosTitles, setTodosTitles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDAta = async () => {
      const titles = await getUserItems(TODOS_URL, id);
      titles.length = 5;
      setTodosTitles(titles);
    };
    fetchDAta();
  }, []);

  return (
    <div>
      <h3>todos</h3>
      <ul>
        {todosTitles.map((title, i) => (
          <li key={i}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
