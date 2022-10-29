import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/context";

function Private() {
  const Router = useRouter();
  const value = useGlobalContext();
  useEffect(() => {
    if (value.user === null) {
      Router.push("/login");
    }
  });
}

export default Private;
