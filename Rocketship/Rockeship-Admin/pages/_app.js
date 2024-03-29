import { AppProvider } from "../context/context";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Private from "../components/common/Private";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <AppProvider>
          <SessionProvider session={session}>
            {router.pathname.split("/")[1] === "dashboard" ? (
              <Private>
                <Component {...pageProps} />
              </Private>
            ) : (
              <div className="">
                <Component {...pageProps} />
              </div>
            )}
          </SessionProvider>
        </AppProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
