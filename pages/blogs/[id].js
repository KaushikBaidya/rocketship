import Image from "next/image";
import { useRouter } from "next/router";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
import { useGetData } from "../../hooks/DataApi";

const SinglePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("blogs", `/blogs/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-28 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={`https://drive.google.com/uc?export=view&id=${data.img}`}
          width={700}
          height={300}
        />
        <div className="text-left lg:w-2/3 w-full mt-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {data?.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
