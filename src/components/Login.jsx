import React, { useRef } from "react";
import AuthServes from "../service/Function";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const [token, setToken] = useToken('token');

  const login = async (e) => {
    e.preventDefault();
    const token = await AuthServes.Login(email.current.value, password.current.value);
    console.log(token);
    setToken(token);
    navigate("/profile");
  };
 
  return (
    <div>
      <form onSubmit={login} className='form'>
        <input ref={email} type='email' placeholder='Email' required />
        <input ref={password} type='password' placeholder='Password' required />
        <button  className=' w-100' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
