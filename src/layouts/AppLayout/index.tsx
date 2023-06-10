import React, { useEffect, useState } from "react";
import { MainPropTypes } from "../../shared/types";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";

function AppLayout({ children }: MainPropTypes) {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 5000);
  }, []);

  return isActive ? (
    <video autoPlay muted playsInline style={{width:'100vw',height:"100vh",objectFit:"contain"}}>
      <source src="/media/logo.mp4" type="video/mp4" />
    </video>
  ) : (
    <div>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default AppLayout;
