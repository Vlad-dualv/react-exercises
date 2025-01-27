import Axios from "axios";

const myAxios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default async function fetchData() {
  const response = await myAxios.get(`/users/`);
  return response.data;
}
