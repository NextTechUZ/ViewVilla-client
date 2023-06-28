import AppLayout from "../layouts/AppLayout";
import "../styles/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
       <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
