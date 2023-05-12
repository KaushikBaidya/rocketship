import React from "react";
import { useGetData } from "../hooks/DataApi";
import { Error } from "./common/Error";
import { Loader } from "./common/Loader";
import Script from "next/script";

const Facebook = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("analytics", `/home/getFacebookApp`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script id="my-script" strategy="lazyOnload">
        {`
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", '${tmp.facebookApp}');
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
FB.init({
  xfbml            : true,
  version          : 'v12.0'
});
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
`}
      </Script>
    </>
  );
};

export default Facebook;
