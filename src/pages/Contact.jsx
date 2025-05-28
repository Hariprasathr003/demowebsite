import { useState } from "react";
import Contactdetails from "../components/Contactdetails";
import Footer from "../components/Footer";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig .js";
import "../assets/style/pages/contactsection.css";
import axios from "axios";
function Contact() {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState(0);
  const [storage, setStorage] = useState([]);
  const [submitMsg, setSubmitMsg] = useState(false);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (name && mail && message && number) {
  //     const formData = {
  //       name: name,
  //       mail: mail,
  //       phone: number,
  //       message: message,
  //       createdAt: new Date(),
  //     };
  //     //add firbase db
  //     const docRef = await addDoc(
  //       collection(firestore, "contactpage"),
  //       formData
  //     );

  //     setStorage([...storage, { id: docRef.id, ...formData }]);
  //     setSubmitMsg(true);
  //     setName("");
  //     setNumber("");
  //     setEmail("");
  //     setMessage("");
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      mail: mail,
      phone: number,
      message: message,
      createdAt: new Date(),
    };
    try {
      const response = await axios.post(
        "https://simplewebpage-3aa9c-default-rtdb.firebaseio.com/contact.json",
        formData
      );
      console.log(response);

      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
      alert("message sent successfully!");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="contactsection">
        <h2>Contact Us</h2>

        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
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
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Mobile Number"
            required
          />

          <textarea
            placeholder="Message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="" type="submit" disabled={submitMsg}>
            Send
          </button>
          {submitMsg && (
            <p className="">Your message has been sent successfully!</p>
          )}
        </form>

        {/* <Contactdetails storedata={storage} setStoredata={setStorage} /> */}
      </div>

      <div className="footersection">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
