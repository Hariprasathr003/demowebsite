import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Searchbarpractice from "./pages/SearchBar";
import { useState } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout onSearch={setSearchItem} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="searchbar"
            element={<Searchbarpractice searchItem={searchItem} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
