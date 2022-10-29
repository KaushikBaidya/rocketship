import React from "react";
import { useGlobalContext } from "../../context/context";

function Index() {
  const value = useGlobalContext();
  console.log(value);
  return (
    <div className="w-full h-full m-5">
      <h1 className="text-4xl font-semibold ">This is dashboard</h1>
    </div>
  );
}

export default Index;
