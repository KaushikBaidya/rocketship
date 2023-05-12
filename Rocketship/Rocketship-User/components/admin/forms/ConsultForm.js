import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";
import TextArea from "../TextArea";
import DatePicker from "../DatePicker";
import moment from "moment";
import TimePicker from "../TimePicker";
import emailjs from "@emailjs/browser";

const schema = yup.object({
  consultId: yup.string().max(50),
  firstname: yup.string().required("Required.").max(50),
  lastname: yup.string().required("Required.").max(50),
  email: yup.string().required("Required.").max(50),
  phone: yup.string().required("Required.").max(50),
  consultdate: yup.date().required("Required"),
  consulttime: yup.date().required("Required."),
  details: yup.string().required("Required."),
});

const ConsultForm = ({ defaultValues, path, mutateAsync, btnText }) => {
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
  const {
    firstname,
    lastname,
    email,
    phone,
    consultdate,
    consulttime,
    details,
  } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    let data = {
      consultId: formData.consultId,
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      consultdate: moment
        .utc(formData.consultdate)
        .local()
        .format("YYYY-MM-DD"),
      consulttime: moment.utc(formData.consulttime).local().format("HH:mm:ss"),
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
    <section className="p-6 bg-white drop-shadow-lg rounded-2xl ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto"
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
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
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
          <div className="col-span-full sm:col-span-3">
            <Controller
              control={control}
              name="consultdate"
              render={({ field }) => (
                <DatePicker
                  label="Consult Date"
                  field={field}
                  errorMessage={consultdate?.message}
                  isRow={false}
                />
              )}
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <Controller
              control={control}
              name="consulttime"
              render={({ field }) => (
                <TimePicker
                  label="Time"
                  field={field}
                  errorMessage={consulttime?.message}
                  isRow={false}
                />
              )}
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
          <div className="col-span-full">
            <SaveButton btnText={btnText} disabled={submitting} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ConsultForm;
