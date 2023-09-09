import { Outlet } from "react-router-dom";
import Header from "../../static/Desktop/Header";
import Footer from "../../static/Desktop/Footer";

const DesktopLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DesktopLayout;
