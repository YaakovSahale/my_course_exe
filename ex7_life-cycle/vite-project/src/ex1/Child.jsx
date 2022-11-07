import { useEffect, useState } from "react";
import axios from "axios";

const todosUrl = `https://jsonplaceholder.typicode.com/todos`;

const Child = ({ userId }) => {
  const [tasksTitles, setTasksTitles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data: userTodos } = await axios.get(
        `${todosUrl}?userId=${userId}`
      );
      const top5todos = userTodos.slice(0, 5);
      const top5titles = top5todos.map((todo) => todo.title);
      setTasksTitles(top5titles);
    };
    getData();
  }, [userId]);

  return (
    <>
      <ul>
        {tasksTitles.map((title, i) => (
          <li key={i}>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default Child;
