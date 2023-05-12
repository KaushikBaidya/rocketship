import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";
import { useRouter } from "next/router";
import Image from "next/image";
import TextArea from "../TextArea";
import InputFile from "../InputFile";
// import InputImage from "../InputImage";

const schema = yup
  .object({
    testimonialId: yup.string().max(50),
    title: yup.string().required("Required.").max(50),
    description: yup.string().required("Required."),
    designation: yup.string().required("Required."),
  })
  .shape({
    filepath: yup.mixed(),
  });

const TestimonialForm = ({ defaultValues, path, mutateAsync, btnText }) => {
  const [imageUrl, setPhoto] = useState(defaultValues.img);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

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
  const { title, description, filepath, designation } = errors;

  const onSubmit = async (formData) => {
    if (imageUrl === "") {
      toast.error("Upload not complete! Please wait.");
      return;
    }
    setSubmitting(true);
    let data = {
      testimonialId: formData.testimonialId,
      title: formData.title,
      description: formData.description,
      designation: formData.designation,
      img: imageUrl,
    };
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      });
      if (status === 201) {
        toast.success("Saved successfully!");
      }
      if (status === 204) {
        toast.success("Update successful!");
        router.push("/dashboard/testimonials");
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
      setPhoto("");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("testimonialId")} />

      <div className="form-col">
        {imageUrl && (
          <Image src={imageUrl} alt="PHOTO" width={200} height={100} />
        )}

        <InputFile
          name="filepath"
          label="Upload Student Image. Image resolution must be (100px X 100px)"
          accept="image/*"
          register={register}
          action={setPhoto}
          errorMessage={filepath?.message}
        />

        <Input
          name="title"
          label="Name"
          type="text"
          register={register}
          errorMessage={title?.message}
        />

        <TextArea
          control={control}
          name="description"
          label="Description"
          errorMessage={description?.message}
        />
        <Input
          name="designation"
          label="Designation"
          type="text"
          register={register}
          errorMessage={designation?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default TestimonialForm;
