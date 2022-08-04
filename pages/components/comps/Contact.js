import Image from "next/image";
import banner from "../../../public/banner.png";

const Contact = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-full  ">
        <div className="mx-10 text-center">
          <h1 className="text-3xl ">GET IN TOUCH</h1>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-5 px-2 gap-2">
              <input
                className="p-3 m-3 bg-gray-200 rounded-md"
                type="text"
                name="your_name"
                placeholder="Your Name"
              />
              <input
                className="p-3 m-3 bg-gray-200 rounded-md"
                type="text"
                name="your_email"
                placeholder="Your Email"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-5 px-2 gap-2">
              <input
                className="p-3 m-3 bg-gray-200 rounded-md"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <input
                className="p-3 m-3 bg-gray-200 rounded-md"
                type="text"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div className="grid grid-cols-1 my-5 px-2 gap-2">
              <textarea
                className="p-3 m-3 h-56 bg-gray-200 rounded-md"
                type="text"
                name="details"
                placeholder="Write your message"
              />
            </div>
            <button
              className="p-3 rounded bg-[#0056CC] hover:bg-[#0030cc] text-white text-xl"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="hidden lg:block">
          <Image src={banner} width={1000} height={700} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;