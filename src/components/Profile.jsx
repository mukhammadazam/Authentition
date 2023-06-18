import { useNavigate } from "react-router-dom";
import axios from "../service/axios.js";
import React, { useEffect, useState } from "react";
const Profile = () => {
  const [mydata, setData] = useState(null);
  const navigate = useNavigate();
  const token = useState(localStorage.getItem("token") || null);
  useEffect(() => {
    axios
      .get("/auth/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.data.name);
        console.log(res.data);
      })
      .catch((error) => {
        // navigate("/");

        console.error(error);
      });
  }, [token]);
  if (!token) return navigate("/");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
console.log(mydata);
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>{mydata}</h1>
    </div>
  );
};

export default Profile;
