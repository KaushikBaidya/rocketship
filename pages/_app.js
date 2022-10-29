import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Header from "../components/dashboard/Header";
import SideBar from "../components/dashboard/SideBar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { AppProvider } from "../context/context";

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
        <div className="w-screen h-screen overflow-hidden">
          <div className="grid w-full h-screen max-w-screen-3xl mx-auto">
            <div className="hidden lg:block">
              <SideBar />
            </div>
            <div className="grid grid-rows-twoRows w-full h-screen overflow-hidden ">
              <Header />
              <div className="overflow-y-auto">
                <div className="grid grid-cols-1 lg:ml-[200px]">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppProvider>
  );
}

export default MyApp;
