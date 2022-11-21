import axios from "axios";

const getAll = (url) => axios.get(url);
const getById = (url, id) => axios.get(`${url}/${id}`);
const getUserItems = async (url, id) => {
  const { data } = await getAll(url, id);
  const titles = data.map((item) => item.title);
  return titles;
};

export { getAll, getById, getUserItems };
