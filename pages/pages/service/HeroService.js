const HeroService = () => {
  return (
    <div className="max-w-[1700px] bg-gray-100 grid grid-cols-1 lg:grid-cols-2 h-full py-28">
      <div className="mx-10 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl py-5 ">
          Complete Start-to-Finish BSN Program Admissions Consulting Services
        </h1>
        <h2 className="text-[16px] lg:text-xl py-5">
          Our start-to-finish BSN program consulting is meant to supercharge
          your ability to get accepted at the country’s most competitive nursing
          school programs. We tailor every aspect of your application to ensure
          the best quality right from your personal statement to your interview.
        </h2>
        <button className="px-8 py-4 bg-blue-600 rounded-3xl text-white my-5">
          Read More
        </button>
      </div>
      <div className="hidden lg:flex relative">
        <div className="bg-yellow-200 w-32 h-32 rounded-full absolute top-12"></div>
        <div className="bg-green-200 w-20 h-20 rounded-full absolute top-14 right-48"></div>
        <div className="bg-red-300 w-20 h-20 rounded-full absolute top-36 right-72"></div>
      </div>
    </div>
  );
};

export default HeroService;
