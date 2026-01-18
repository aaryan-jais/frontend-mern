import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
   

  const { loading, error, message } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  

useEffect(() => {
  if (message) {
    
      const timer = setTimeout(() => {
       navigate("/"); // redirect to home
      }, 1000);

      return () => clearTimeout(timer); // cleanup on unmount
  }
}, [message]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{loading ? "Loading..." : "Login"}</button>
      </form>
       {/* Show success message */}
      {message && <p style={{ color: "green" }}>{message}</p>}
      
      {/* Show error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
};


export default Login;
