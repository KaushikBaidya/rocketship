import Image from "next/image";

const Success = () => {
  const data = [
    { id: "0", img: "/schools/Berkeley.png" },
    { id: "1", img: "/schools/Columbia.png" },
    { id: "2", img: "/schools/Duke.png" },
    { id: "3", img: "/schools/Harvard.png" },
    { id: "4", img: "/schools/NYU.png" },
    { id: "5", img: "/schools/Penn.png" },
    { id: "6", img: "/schools/Stanford.png" },
    { id: "7", img: "/schools/UCLA-1.png" },
    { id: "8", img: "/schools/USC.png" },
    { id: "9", img: "/schools/Yale.png" },
  ];
  return (
    <section className="min-h-full py-14">
      <div className="h-full grid grid-cols-1 content-center">
        <div className="max-w-2xl mx-auto pb-5">
          <h2 className="text-[24px] text-slate-600 font-bold lg:text-[45px] text-center px-5 uppercase tracking-wider">
            “View our success stories”
          </h2>
          <h3 className="text-lg text-gray-600 text-center mx-28">
            Rocket Ship students got admitted admission to these schools
          </h3>
        </div>
        <div className="py-2">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-5 mx-auto px-5 gap-5 place-items-center ">
            {/* <div className=" flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between "> */}
            {data.map((item) => (
              <div key={item.id} className="p-5">
                <Image src={item.img} width={100} height={80} alt="" />
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Success;
