import AboutUsImg from "../assets/aboutus.jpg";
import Footer from "../components/Footer";
import "../assets/style/pages/about.css";
function About() {
  return (
    <>
      <div className="aboutsection">
        <img src={AboutUsImg} alt="Hero" />
      </div>

      <div>
        <p>
          At KaayLabs, we’re a passionate team of digital experts who are driven
          by helping our clients achieve their goals. We offer a wide range of
          services, from web development and design to marketing and AI
          solutions. Founded in 2015 by industry veteran Krishnan Naranapatty,
          who boasts over 30 years of experience, we’ve grown into a trusted
          partner for businesses of all sizes. With a commitment to innovation
          and exceptional service, we’re here to help you take your digital
          presence to the next level.
        </p>
      </div>

      <div className="footersection">
        <Footer />
      </div>
    </>
  );
}

export default About;
