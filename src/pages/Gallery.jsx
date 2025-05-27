import GalleryImg1 from "../assets/Gallery/gallery1.jpg";
import GalleryImg2 from "../assets/Gallery/gallery2.jpg";
import GalleryImg3 from "../assets/Gallery/gallery3.jpg";
import GalleryImg4 from "../assets/Gallery/gallery4.jpg";
import GalleryImg5 from "../assets/Gallery/gallery5.jpg";
import GalleryImg6 from "../assets/Gallery/gallery6.jpg";
import Footer from "../components/Footer";
import "../assets/style/pages/gallerysection.css";
const images = [
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg4,
  GalleryImg5,
  GalleryImg6,
];

function Gallery() {
  return (
    <>
      <div className="gallerysection">
        <h2 >Gallery</h2>
        <div>
          {images.map((val, index) => (
            <img
              key={index}
              src={val}
              className="gallerysectionimage"
              alt={`Gallery image`}
            />
          ))}
        </div>
      </div>
      <div className="footersection">
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
