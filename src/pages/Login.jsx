import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css"; // Import CSS module

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
