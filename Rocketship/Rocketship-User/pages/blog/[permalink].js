import { Loader } from "../../components/common/Loader";
import MetaComponents from "../../components/MetaComponents";

export async function getServerSideProps(context) {
  const { permalink } = context.query;
  const res = await fetch(`${process.env.BASE_URL}/api/blog/${permalink}`);
  const data = await res.json();

  console.log(data);

  return { props: { data } };
}

const SingleBlogPage = ({ data }) => {
  if (!data) return <Loader />;
  const tmp = data;

  return (
    <main className="text-gray-600">
      <MetaComponents
        title={tmp.title}
        keywords={tmp.keywords}
        description={tmp.seoDescription}
        imageUrl={tmp.img}
      />
      <div className="max-w-screen-lg mx-auto px-5 py-20 lg:py-28">
        {/* <div className="w-full lg:h-80 overflow-hidden">
          <Image alt={tmp.title} src={tmp.img} height={100} width={1000} />
        </div> */}
        <h1 className="text-xl lg:text-4xl text-center my-4 font-medium text-gray-900">
          {tmp?.title}
        </h1>
        <article>
          <div dangerouslySetInnerHTML={{ __html: tmp.description }}></div>
        </article>
      </div>
    </main>
  );
};

export default SingleBlogPage;
