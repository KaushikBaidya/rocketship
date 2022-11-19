import BlogCard from "../../components/dashboard/components/BlogCard";
import TestimonialCard from "../../components/dashboard/components/TestimonialCard";

function Index() {
  return (
    <>
      <div className="w-full h-full p-5">
        <h1 className="text-4xl font-semibold ">dashboard</h1>
      </div>
      <div className="flex">
        <div>
          <BlogCard />
        </div>
        <div>
          <TestimonialCard />
        </div>
      </div>
    </>
  );
}

export default Index;
