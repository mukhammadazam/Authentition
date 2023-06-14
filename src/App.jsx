import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import ProfileComponent from "./components/Profile";
import Home from "./components/Home";
function App() {
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfileComponent />} />
      </Routes>
    </>
  );
}

export default App;
