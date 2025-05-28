import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig .js";
import Registerdetails from "../components/Registerdetails";
import "../assets/style/pages/register.css";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [storage, setStorage] = useState([]);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (name && mail && address && number) {
  //     const newFormData = {
  //       name: name,
  //       phone: number,
  //       mail: mail,
  //       password: password,
  //       address: address,
  //       createdAt: new Date(),
  //     };
  //     //add firebase
  //     const docRef = await addDoc(
  //       collection(firestore, "registerpage"),
  //       newFormData
  //     );

  //     setStorage([...storage, { id: docRef.id, ...newFormData }]);
  //     setName("");
  //     setNumber("");
  //     setPassword("");
  //     setEmail("");
  //     setAddress("");
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormData = {
      name: name,
      phone: number,
      mail: mail,
      password: password,
      address: address,
      createdAt: new Date(),
    };

    try {
      const response = await axios.post(
        "https://simplewebpage-3aa9c-default-rtdb.firebaseio.com/register.json",
        newFormData
      );
      console.log("Response:", response);
      setName("");
      setNumber("");
      setPassword("");
      setEmail("");
      setAddress("");
      alert("Registered successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="register">
      <h2 className="">Register</h2>
      <form className="registerpage" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          value={mail}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <button type="submit">Register</button>
      </form>

      {/* <Registerdetails storedata={storage} setStoredata={setStorage} /> */}
    </div>
  );
}

export default Register;
