import { useNavigate } from "react-router-dom";
import Imagehero from "../assets/hero1.jpg";
import Footer from "../components/Footer";
import "../assets/style/pages/homesection.css";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="homesection">
        <img src={Imagehero} alt="Hero" className="" />

        <h1>Welcome to My Site</h1>
        <p>This is the homepage</p>
        <button onClick={() => navigate("/about")}>Get Started</button>
      </div>

      <div className="footersection">
        <Footer />
      </div>
    </>
  );
}

export default Home;
