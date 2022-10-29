import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context/context";

function Index() {
  const Router = useRouter();
  const value = useGlobalContext();
  useEffect(() => {
    if (value.user === null) {
      Router.push("/login");
    }
  });
  return (
    <div className="w-full h-full m-5">
      <h1 className="text-4xl font-semibold ">This is dashboard</h1>
    </div>
  );
}

export default Index;
