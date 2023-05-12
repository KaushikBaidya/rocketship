import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";
import TextArea from "../TextArea";
import Image from "next/image";
import InputFile from "../InputFile";

const schema = yup
  .object({
    heroId: yup.string().max(50),
    title: yup.string().required("Required."),
    subtitle: yup.string().required("Required."),
  })
  .shape({
    filepath: yup.mixed(),
  });

const HeroForm = ({
  defaultValues,
  path,
  mutateAsync,
  action,
  btnText,
  returnPath,
}) => {
  const [imageUrl, setPhoto] = useState(defaultValues.image);
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
  const { title, subtitle, filepath } = errors;

  const onSubmit = async (formData) => {
    if (imageUrl === "") {
      toast.error("Upload not complete! Please wait.");
      return;
    }

    setSubmitting(true);
    let data = {
      heroId: formData.heroId,
      title: formData.title,
      subtitle: formData.subtitle,
      image: imageUrl,
    };
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      });
      if (status === 201) {
        toast.success("Saved successfully!");
        reset();
      }
      if (status === 204) {
        toast.success("Update successful!");
        router.push(returnPath);
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
      setPhoto("");
      setSubmitting(false);
      action();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-col">
        {imageUrl?.length > 0 ? (
          <Image src={imageUrl} alt="PHOTO" width={200} height={200} />
        ) : (
          <span></span>
        )}

        <InputFile
          name="filepath"
          label="Upload Image. Image resolution must be (425px X 425 px)"
          accept="image/*"
          register={register}
          action={setPhoto}
          errorMessage={filepath?.message}
        />
        <Input
          name="title"
          label="Title"
          type="text"
          register={register}
          errorMessage={title?.message}
        />

        <TextArea
          control={control}
          name="subtitle"
          label="Subtitle"
          errorMessage={subtitle?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default HeroForm;
