import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SiteLayout = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default SiteLayout;