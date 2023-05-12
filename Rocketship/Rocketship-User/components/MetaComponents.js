import React from "react";
import Head from "next/head";

const MetaComponents = ({
  title = "",
  description = "",
  keywords = "",
  appId = "",
  imageUrl = "",
}) => {
  return (
    <Head>
      {title !== "" && <title>{title} | Rocketship Education </title>}
      {description !== "" && <meta name="description" content={description} />}
      {keywords !== "" && <meta name="keywords" content={keywords} />}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <meta name="author" content="RocketShip Education" />

      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:image" content={imageUrl} />
      <meta property="fb:app_id" content={appId} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://rocketshipedu.com/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default MetaComponents;
