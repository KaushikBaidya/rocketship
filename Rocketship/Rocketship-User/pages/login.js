"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "../components/admin/Input";
import { Loader } from "../components/common/Loader";
import Link from "next/link";

const schema = yup.object({
  email: yup.string().required("Required.").max(50),
  password: yup.string().required("Required."),
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { email, password } = errors;

  const onSubmit = async (formData) => {
    setLoading(true);

    signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    }).then(({ ok, error }) => {
      setLoading(false);
      if (ok) {
        reset();
        router.push("/dashboard");
      } else {
        toast.error(error);
      }
    });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
        >
          <div className="form-col">
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
            <button
              disabled={loading}
              className={`${
                loading
                  ? "cursor-not-allowed border-gray-200 bg-gray-100"
                  : "border-black bg-[#1C1953] text-white hover:bg-white hover:text-black"
              } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
            >
              {loading ? <Loader /> : <p>login</p>}
            </button>
            <p className="pt-2 text-center text-sm text-black">
              No account?
              <Link className="underline" href="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
