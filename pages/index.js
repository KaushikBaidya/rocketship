import Head from "next/head";
import HomeMain from "../components/Home/HomeMain";
export default function Home() {
  return (
    <div>
      <Head>
        <title>RocketShip</title>
      </Head>
      <main className="w-full relative">
        <HomeMain />
      </main>
    </div>
  );
}
