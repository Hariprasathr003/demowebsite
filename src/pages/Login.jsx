import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig .js";
import "../assets/style/pages/login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   //get method in firebase
  //   const Logindata = await getDocs(collection(firestore, "registerpage"));
  //   let validUser = false;

  //   Logindata.forEach((doc) => {
  //     const data = doc.data();
  //     if (data.mail === email && data.password === password) {
  //       validUser = true;
  //     }
  //   });

  //   if (validUser) {
  //     alert("Login Successful!");
  //     setIsLoggedIn(true);
  //     setEmail("");
  //     setPassword("");
  //   } else {
  //     alert("Invalid Email or Password");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://simplewebpage-3aa9c-default-rtdb.firebaseio.com/register.json"
      );

      const data = response.data;
      console.log(response, "data");

      let validUser = false;

      for (const key in data) {
        if (data[key].mail === email && data[key].password === password) {
          validUser = true;
          break;
        }
      }

      if (validUser) {
        alert("Login Successful!");
        setIsLoggedIn(true);
        setEmail("");
        setPassword("");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logout Successful!");
  };

  return (
    <div className="login">
      <h2>Login</h2>

      {!isLoggedIn ? (
        <form className="loginsection" onSubmit={handleLogin}>
          <input
            className=""
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className=""
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="" type="submit">
            Login
          </button>
        </form>
      ) : (
        <div className="logged">
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Login;
