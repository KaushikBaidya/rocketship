import Image from "next/image";
import banner from "../public/banner.jpg";
import Head from "next/head";

const Contacts = () => {
  return (
    <section>
      <Head>
        <title>RocketShip</title>
      </Head>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-full py-28">
        <div className="mx-10 text-center">
          <h1 className="text-xl lg:text-3xl text-[#211A56] font-semibold">
            GET IN TOUCH
          </h1>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-5 px-2 gap-2">
              <input
                className="p-3 m-1 bg-gray-200 rounded-md"
                type="text"
                name="your_name"
                placeholder="Your Name"
              />
              <input
                className="p-3 m-1 bg-gray-200 rounded-md"
                type="text"
                name="your_email"
                placeholder="Your Email"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-5 px-2 gap-2">
              <input
                className="p-3 m-1 bg-gray-200 rounded-md"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <input
                className="p-3 m-1 bg-gray-200 rounded-md"
                type="text"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div className="grid grid-cols-1 my-5 px-2 gap-2">
              <textarea
                className="p-3 m-1 h-52 bg-gray-200 rounded-md"
                type="text"
                name="details"
                placeholder="Write your message"
              />
            </div>
            <button
              className="p-3 rounded bg-[#EF1C26] hover:bg-[#99060d] text-white text-xl"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="hidden lg:block mx-10">
          <Image src={banner} width={475} height={505} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
