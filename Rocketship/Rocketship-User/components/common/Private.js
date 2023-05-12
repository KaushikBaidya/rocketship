import SideBar from "../admin/dashboard/SideBar";
import Header from "../admin/dashboard/Header";
import { useSession, getSession } from "next-auth/react";
import { Loader } from "./Loader";
import { useRouter } from "next/router";
import Footer from "../client/layout/Footer";

const Private = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  // console.log(status, session);

  if (status === "loading") return <Loader />;
  if (status === "unauthenticated") {
    router.push("/login");
  }
  if (status === "authenticated");
  return (
    <>
      <div className="">
        {/* <div className="hidden lg:block">
            <SideBar action={() => {}} />
          </div> */}
        <Header email={session?.user?.email} />
        <div className="w-full h-full overflow-hidden ">
          <div className="overflow-y-auto py-10 my-10">
            <div className="max-w-5xl mx-auto pb-5">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Private;
