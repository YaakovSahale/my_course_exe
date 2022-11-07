import axios from "axios";

const getAll = (url) => axios.get(url);

const updateUser = (url, patchedUser) => axios.patch(url, patchedUser);

export { getAll, updateUser };
