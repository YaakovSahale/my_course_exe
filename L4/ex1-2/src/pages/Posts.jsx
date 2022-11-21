import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserItems } from "../utils";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [postsTitles, setPostsTitles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDAta = async () => {
      const titles = await getUserItems(POSTS_URL, id);
      titles.length = 5
      setPostsTitles(titles);
    };
    fetchDAta();
  }, []);

  return (
    <div>
      <h3>posts</h3>
      <ul>
        {postsTitles.map((title, i) => (
          <li key={i}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
