import styles from "./layout.module.scss";
import React, { useEffect, useState } from "react";
import { MainPropTypes } from "../../shared/types";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";
import SEO from "../../SEO";

function AppLayout({ children }: MainPropTypes) {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // setIsActive(false);
    }, 4000);
  }, []);

  return <>
        <SEO />

  {
    isActive ? (
      <div className={styles.video}>
        <video autoPlay muted controls src="/media/logo.mp4"   />

         <h1 className="bruno">ViewVilla</h1>
      </div>
    ) : (
      <div className={styles.layout}>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </div>)
  }
  </>
 
}

export default AppLayout;
