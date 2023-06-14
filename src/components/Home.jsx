import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/Register'>Sign UP</Link>
      <Link className="d-block" to='/login'>Login</Link>
    </div>
  );
};

export default Home;
