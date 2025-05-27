import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig .js";
import Registerdetails from "../components/Registerdetails";
import "../assets/style/pages/register.css";

function Register() {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [storage, setStorage] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (name && mail && address && number) {
      const newFormData = {
        name: name,
        phone: number,
        mail: mail,
        password: password,
        address: address,
        createdAt: new Date(),
      };
      //add firebase
      const docRef = await addDoc(
        collection(firestore, "registerpage"),
        newFormData
      );

      setStorage([...storage, { id: docRef.id, ...newFormData }]);
      setName("");
      setNumber("");
      setPassword("");
      setEmail("");
      setAddress("");
    }
  }

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
