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
  const driveUpload = (e) => {
    var file = e.target.files[0]; //the file
    if (typeof file === "undefined") return;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(file.name)) return;
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(e.target.files[0]); //start conversion...
    reader.onload = function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      fetch(
        "https://script.google.com/macros/s/AKfycbyPYSAxwvQTnmVmC7r15tz9caXfim2tLuB-GWko-oEzKRSw9ns/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          action(a.id);
        })
        .catch((e) => console.log(e)); // Or Error in console
    };
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
