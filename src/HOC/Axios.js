import Axios from "axios";
//make the base URL and other config
const userInfo = Axios.create({
  baseURL: "https://api.github.com/",
});
export default userInfo;
