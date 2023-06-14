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
    localStorage.setItem("token", res.data.token);
  },
  async Delet() {
    const response = await axios.delete("/auth/logout");
    console.log(response);
  },
};
export default AuthServes;
