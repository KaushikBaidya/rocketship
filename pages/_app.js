import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { AppProvider } from "../context/context";
import Private from "../components/private";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AppProvider>
      {router.pathname.split("/")[1] !== "dashboard" ? (
        <div className="max-w-screen-3xl mx-auto">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      ) : (
        <Private>
          <Component {...pageProps} />
        </Private>
      )}
    </AppProvider>
  );
}

export default MyApp;
