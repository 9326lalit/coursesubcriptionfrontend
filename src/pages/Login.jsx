import React, { useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page refresh
  
    if (!email || !password) {
      alert("⚠️ Please fill in both fields.");
      return;
    }
  
    fetch("http://localhost:9000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("✅ Login Successful!");
        navigate("/");
      } else {
        alert("❌ " + data.message);
      }
    })
    .catch((error) => {
      alert("❌ Server Error: " + error);
    });
  
    setEmail("");
    setPassword("");
  }
  

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back!</h2>
        <p>Log in to access your account.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="auth-btn" type="submit">
            Login
          </button>
        </form>

        <p className="switch-auth">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
