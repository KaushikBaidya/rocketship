import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import LeftNavbar from "../components/dashboard/LeftNavbar";
import Header from "../components/dashboard/Header";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      {router.pathname.split("/")[1] !== "dashboard" ? (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <div>
          <LeftNavbar />
          <Header />
          <div className="flex flex-wrap ml-[200px] px-4">
            <div className="w-full">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyApp;
