import styles from "./layout.module.scss"
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
    }, 4000);
  }, []);

  return isActive ? (
    <div className={styles.video}>

    <video autoPlay muted playsInline  >
      <source src="/media/logo.mp4" type="video/mp4" />
    </video>
   <h1 className="bruno">ViewVilla</h1>
    </div>
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
