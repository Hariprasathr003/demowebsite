import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../assets/style/pages/footersection.css";

function Footer() {
  return (
    <footer className="footersection">
      <div className="footercontent">
        <div className="contact">
          <h2 >Contact Us</h2>
          <p>Email: abc@gmail.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: Chennai</p>
        </div>

        <div className="contactlinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
          </ul>
        </div>

        <div className="contacticons">
          <h2>Follow Us</h2>
          <div className="">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer">
        <p>&copy; 2025 My Website.</p>
      </div>
    </footer>
  );
}

export default Footer;
