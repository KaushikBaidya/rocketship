import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";
import TextArea from "../TextArea";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import pyimage from "../../../public/37960-online-payment.gif";
import svimg from "../../../public/bbblurry.svg";

const schema = yup.object({
  consultId: yup.string().max(50),
  firstname: yup.string().required("Required.").max(50),
  lastname: yup.string().required("Required.").max(50),
  email: yup.string().required("Required.").max(50),
  phone: yup.string().required("Required.").max(50),
  postcode: yup.string().required("Required.").max(50),
  details: yup.string().required("Required."),
});

const EnrollForm = ({ defaultValues, path, mutateAsync, btnText }) => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { firstname, lastname, email, phone, details, postcode } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    let data = {
      consultId: formData.consultId,
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      details: formData.details,
    };
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      });
      if (status === 201) {
        // toast.success("Applied successfully!");
        emailjs
          .send(
            `${process.env.EMAILJS_SERVICE}`,
            `${process.env.EMAILJS_TEMPLATE_CONTACT}`,
            data,
            `${process.env.EMAILJS_PUBLIC}`
          )
          .then(
            () => {
              toast.success("Message sent successfully");
            },
            (error) => {
              toast.error("Response : " + error);
            }
          );
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      reset();
      setSubmitting(false);
    }
  };

  return (
    <section className="xl:max-w-screen-lg mx-auto grid grid-cols-1 justify-items-center content-center mb-20">
      <div className="flex gap-4">
        <div className="hidden md:flex flex-col pl-8 ">
          <div className="space-y-2 pl-10 pt-10 ">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#251B37]">
              Enroll your course
            </h2>
            {/* <div className="text-[#251B37]">Enroll your course</div> */}
          </div>
          <div className="pb-40">
            <Image src={pyimage} width={500} height={450} alt="contact" />
          </div>
        </div>
        <div className="max-w-lg mx-auto mt-10 p-12 rounded bg-gray-300 relative">
          {/* <Image
          src={svimg}
          width={500}
          height={500}
          alt="bg-picture"
          className="absolute rounded left-[150px] z-[-1]"
        /> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container flex flex-col mx-auto z-1"
          >
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="w-full col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  First name
                </label>
                <Input
                  name="firstname"
                  type="text"
                  register={register}
                  errorMessage={firstname?.message}
                  className="bg-color-[#eee] p-4 text-xl rounded-2xl shadow-xl focus:outline-white shadow-red-600"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Last name
                </label>
                <Input
                  name="lastname"
                  type="text"
                  register={register}
                  errorMessage={lastname?.message}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div className="col-span-full">
                <label for="Email" className="text-sm">
                  Email
                </label>
                <Input
                  name="email"
                  type="text"
                  register={register}
                  errorMessage={email?.message}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Phone
                </label>
                <Input
                  name="phone"
                  type="text"
                  register={register}
                  errorMessage={phone?.message}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div className="col-span-full">
                <select
                  defaultValue="BDT"
                  name="currency"
                  className="select select-bordered w-[60px] rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                >
                  <option value="BDT">BDT</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Postcode
                </label>
                <Input
                  name="postcode"
                  type="text"
                  register={register}
                  errorMessage={postcode?.message}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                />
              </div>
              <div className="col-span-full">
                <TextArea
                  control={control}
                  name="details"
                  label="If you have anything to say..."
                  errorMessage={details?.message}
                />
              </div>
            </div>
            <div className="flex mt-5 text-lg ">
              <button className="hover:text-[#211A56] hover:bg-white border-2 border-[#E2136E] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl bg-[#E2136E] w-full py-3 text-white ">
                Pay with Bkash
              </button>
              <button className="hover:text-[#211A56] hover:bg-white border-2 border-[#8A288F] mr-4 rounded-tl-3xl rounded-br-3xl px-5 hover:shadow-indigo-800 hover:shadow-2xl bg-[#8A288F] w-full text-white">
                Pay now Rocket
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollForm;
