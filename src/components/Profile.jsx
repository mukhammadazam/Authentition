import { useNavigate } from "react-router-dom";
import axios from "../service/axios.js";
import React, { useEffect, useState } from "react";
import AuthServes from "../service/Function.jsx";

const Profile = () => {
  const [mydata, setData] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) return navigate("/");
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
      })
      .catch((error) => {
        console.error(error);
        navigate("/");
      });
  }, []);

  const logout = () => {
    AuthServes.Delet();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>{mydata}</h1>
    </div>
  );
};

export default Profile;
