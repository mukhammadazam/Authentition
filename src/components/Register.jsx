import { useNavigate } from "react-router-dom";
import AuthServes from "../service/Function";
import { useRef } from "react";
import "./Register.scss";
const Register = () => {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const password_confirmation = useRef("");
  const push = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    AuthServes.Register(
      name.current.value,
      email.current.value,
      password.current.value,
      password_confirmation.current.value
    );
  };
  return (
    <div>
      <form onSubmit={register} className='form'>
        <input
          ref={name}
          className='d-block'
          type='text'
          placeholder='Name'
          required
        />
        <input
          ref={email}
          className='d-block'
          type='email'
          placeholder='Email'
          required
        />
        <input
          ref={password}
          className='d-block'
          type='password'
          placeholder='Password'
          required
        />
        <input
          ref={password_confirmation}
          className='d-block'
          type='password'
          placeholder='Conform Password'
          required
        />
        <button className='d-block w-100' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
