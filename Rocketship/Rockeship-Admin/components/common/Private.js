import SideBar from "../admin/dashboard/SideBar";
import Header from "../admin/dashboard/Header";
import { useSession, getSession } from "next-auth/react";
import { Loader } from "./Loader";
import { useRouter } from "next/router";

const Private = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") return <Loader />;
  if (status === "unauthenticated") {
    router.push("/");
  }
  if (status === "authenticated")
    return (
      <>
        <div className="w-screen h-screen overflow-hidden">
          <div className="grid w-full h-screen max-w-screen-3xl mx-auto">
            <div className="hidden lg:block">
              <SideBar action={() => {}} />
            </div>
            <div className="grid grid-rows-twoRows w-full h-screen overflow-hidden ">
              <Header email={session.user?.email} />
              <div className="overflow-y-auto">
                <div className="grid grid-cols-1 lg:ml-[200px]">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Private;
