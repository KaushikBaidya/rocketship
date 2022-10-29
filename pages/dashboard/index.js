import React from "react";
// import { useRouter } from "next/router";
// import { useGlobalContext } from "../../context/context";
import Private from "../../components/private";

function Index() {
  // const Router = useRouter();
  // const value = useGlobalContext();
  // useEffect(() => {
  //   if (value.user === null) {
  //     Router.push("/login");
  //   }
  // });
  Private();
  return (
    <div className="w-full h-full m-5">
      <h1 className="text-4xl font-semibold ">This is dashboard</h1>
    </div>
  );
}

export default Index;
