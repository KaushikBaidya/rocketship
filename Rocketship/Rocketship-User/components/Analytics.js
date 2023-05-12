import React from "react";
import { useGetData } from "../hooks/DataApi";
import { Error } from "./common/Error";
import { Loader } from "./common/Loader";
import Script from "next/script";

const Analytics = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("analytics", `/home/getGoogleId`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tmp.googleId}`}
        strategy="afterInteractive"
      ></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${tmp.googleId}');
        `}
      </Script>
    </>
  );
};

export default Analytics;
