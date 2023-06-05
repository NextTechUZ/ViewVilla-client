import AppLayout from "../layouts/AppLayout";
import "../styles/global.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
    
      <Component {...pageProps} />
  
    </AppLayout>
  );
}

export default MyApp;
