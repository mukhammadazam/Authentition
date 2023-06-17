import axios from "./axios.js";
const AuthServes = {
  async Register(name, email, password, password_confirmation) {
    const response = await axios.post("/auth/register", {
      name,
      email,
      password,
      password_confirmation,
    });
    console.log({ name, email, password, password_confirmation });
    console.log(response);
  },

  async Login(email, password) {
    const res = await axios.post("/auth/login", { email, password });
    return res.data.token
  },

  async getAuthedUser(token) {

    // const token = await localStorage.getItem("token");
    console.log(token);
    const config = { headers: { 'Authorization': `Basic ${token}` } };

    return await axios.get("/auth/user", config);
  }
}
export default AuthServes;
