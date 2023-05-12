import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";
import { useRouter } from "next/router";
import Image from "next/image";
import InputFile from "../InputFile";

const schema = yup
  .object({
    institutionId: yup.string().max(50),
    name: yup.string().required("Required.").max(50),
  })
  .shape({
    filepath: yup.mixed(),
  });

const InstitutionForm = ({ defaultValues, path, mutateAsync, btnText }) => {
  const [imageUrl, setPhoto] = useState(defaultValues.image);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { name, filepath } = errors;

  const onSubmit = async (formData) => {
    console.log(formData);
    if (imageUrl === "") {
      toast.error("Upload not complete! Please wait.");
      return;
    }
    setSubmitting(true);
    let data = {
      institutionId: formData.institutionId,
      name: formData.name,
      image: imageUrl,
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
        router.push("/dashboard/institution");
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
      <input type="hidden" {...register("institutionId")} />

      <div className="form-col">
        {imageUrl?.length > 0 ? (
          <Image src={imageUrl} alt="PHOTO" width={200} height={100} />
        ) : (
          <span></span>
        )}

        <InputFile
          name="filepath"
          label="Upload Image. Image resolution must be (200px X 100px)"
          accept="image/*"
          register={register}
          action={setPhoto}
          errorMessage={filepath?.message}
        />

        <Input
          name="name"
          label="Name"
          type="text"
          register={register}
          errorMessage={name?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default InstitutionForm;
