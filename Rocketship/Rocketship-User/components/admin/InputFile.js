import React from "react";
import ErrorMessage from "./ErrorMessage";

const InputFile = ({
  name,
  label,
  accept = "image/*",
  register,
  errorMessage = "",
  action,
}) => {
  const driveUpload = async (e) => {
    var file = e.target.files[0]; //the file
    if (typeof file === "undefined") return;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(file.name)) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my-uploads");

    const tmp = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    action(tmp.secure_url);
  };
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <input
        type="file"
        accept={accept}
        className="border-red-800"
        {...register(name)}
        onChange={(e) => driveUpload(e)}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default InputFile;
