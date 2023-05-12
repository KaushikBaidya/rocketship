import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usePostData } from "../hooks/DataApi";
import { useRouter } from "next/router";
import Input from "../components/admin/Input";
import SaveButton from "../components/common/button/SaveButton";
import Link from "next/link";

const schema = yup.object().shape({
  email: yup.string().max(100).required("Required"),
  password: yup
    .string()
    .max(20)
    .required("Required")
    .min(8, "Password is too short, at least 8 characters"),
  username: yup.string().max(20).required("Required"),
});

const Register = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { mutateAsync } = usePostData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: yupResolver(schema),
  });

  const { email, password, username } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    const data = {
      email: formData.email,
      password: formData.password,
      username: formData.username,
    };
    try {
      const { status } = await mutateAsync({
        path: "/user/createUser",
        formData: data,
      });
      console.log(status);
      if (status === 200) {
        toast.success("Saved successfully!");
        router.push("/login");
      } else if (status === 204) {
        toast.success("Update successful!");
      } else {
        toast.error("Attempt Unsuccessful ! please try again");
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
      setSubmitting(false);
      reset();
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 pt-14">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
        >
          <div className="form-col">
            <Input
              name="username"
              label="User Name"
              type="text"
              register={register}
              errorMessage={username?.message}
            />
            <Input
              name="email"
              label="Email"
              type="text"
              register={register}
              errorMessage={email?.message}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              register={register}
              errorMessage={password?.message}
            />
          </div>
          <div className="mt-6">
            <SaveButton btnText="Register" disabled={submitting} />
            <p className="pt-2 text-center text-sm text-black">
              Already have an account?{" "}
              <Link className="underline" href="/login">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
