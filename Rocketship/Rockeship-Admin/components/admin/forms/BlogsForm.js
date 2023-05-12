import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";
import { useRouter } from "next/router";
import InputFile from "../InputFile";
// import InputFile from "../InputFile";
// import RichText from "../RichText";
import TextEditor from "../TextEditor";
import DraftButton from "../../common/button/DraftButton";
import TextArea from "../TextArea";

const schema = yup
  .object({
    blogId: yup.string().max(50),
    title: yup.string().required("Required.").max(1000),
    description: yup.string().required("Required."),
    keywords: yup.string().required("Required.").max(1000),
    seoDescription: yup.string().required("Required.").max(4000),
    permalink: yup.string().max(100),
  })
  .shape({
    filepath: yup.mixed(),
  });

const BlogsForm = ({ defaultValues, path, mutateAsync, btnText }) => {
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
  const { title, description, filepath, keywords, seoDescription, permalink } =
    errors;

  const onSubmit = async (formData) => {
    if (imageUrl === "") {
      toast.error("Upload not complete! Please wait.");
      return;
    }

    setSubmitting(true);
    let data = {
      blogId: formData.blogId,
      title: formData.title,
      description: formData.description,
      permalink:
        formData.permalink !== ""
          ? formData.permalink.replace(/\s/g, "-")
          : formData.title.replace(/\s/g, "-"),
      keywords: formData.keywords,
      seoDescription: formData.seoDescription,
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
        router.push("/dashboard/blog");
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
      <input type="hidden" {...register("blogId")} />
      <div className="form-col">
        {imageUrl?.length > 0 ? (
          <Image src={imageUrl} alt="PHOTO" width={200} height={100} />
        ) : (
          <span></span>
        )}

        <InputFile
          name="filepath"
          label="Upload Feature Image. Image resolution must be (381px X 200px)"
          accept="image/*"
          register={register}
          action={setPhoto}
          errorMessage={filepath?.message}
        />

        <Input
          name="title"
          label="Blog Title"
          type="text"
          register={register}
          errorMessage={title?.message}
        />
        <Input
          name="keywords"
          label="SEO Keywords"
          type="text"
          register={register}
          errorMessage={keywords?.message}
        />
        <Input
          name="seoDescription"
          label="SEO Short Description"
          type="text"
          register={register}
          errorMessage={seoDescription?.message}
        />

        <Input
          name="permalink"
          label="Url Name"
          type="text"
          register={register}
          errorMessage={permalink?.message}
        />
        {/* <RichText
          control={control}
          name="description"
          errorMessage={description?.message}
        /> */}
        <TextEditor
          control={control}
          name="description"
          label="Blog Description"
          errorMessage={description?.message}
        />

        {/* <DraftButton btnText="Save as Draft" disabled={submitting} /> */}
        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default BlogsForm;
