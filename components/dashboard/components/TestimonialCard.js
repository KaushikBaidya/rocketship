import React from "react";
import { useGetData } from "../../../hooks/DataApi";
import { Error } from "../../Error";
import { Loader } from "../../Loader";

export default function TestimonialCard() {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("testimonials", `/getTestimonials`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;
  return (
    <div className="w-60">
      <section className="py-10 bg-green-100 sm:py-16 lg:py-10 p-10 ml-8 rounded-xl">
        <div>
          <h3 className="mt-8 text-7xl font-semibold text-black text-center">
            {data.length}
          </h3>
          <p className="mt-4 text-2xl font-semibold text-gray-600">
            Testimonials
          </p>
        </div>
      </section>
    </div>
  );
}
