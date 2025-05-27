import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = ({ onSearch }) => {
  return (
    <div>
      <Navbar onSearch={onSearch} />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
