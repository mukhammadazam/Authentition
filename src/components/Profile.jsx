import { useNavigate } from "react-router-dom";
import axios from "../service/axios.js";
import React, { useEffect, useState } from "react";
import AuthServes from "../service/Function.jsx";
import useToken from "../hooks/useToken.js";
const Profile = () => {
  const [mydata, setData] = useState(null);
  const navigate = useNavigate();
  const [token, setToken] = useToken("token");
  console.log(token);
  useEffect(() => {
    if (token) {
      AuthServes.getAuthedUser(token).then((data) => {
        console.log(data);
        if (data.status === 200) {
          localStorage.getItem('token');
          console.log(data.data.data);
          setData(data.data.data);
        }
      });
    }
  }, []);
  if (!token) return navigate("/");

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>{mydata?.name}</h1>
      <h2>{mydata?.email}</h2>
      <h3>{mydata?.role_name}</h3>
    </div>
  );
};

export default Profile;
