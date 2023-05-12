import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { Controller } from "react-hook-form";
import CKeditor from "./CKeditor";
// import CKEditor from "@ckeditor/ckeditor5-react";

const TextEditor = ({ control, name, label, errorMessage = "" }) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required: "Description is required" }}
        render={({ field }) => {
          return (
            <>
              <CKeditor
                name="description"
                onChange={(data) => {
                  setData(data);
                }}
                {...field}
                editorLoaded={editorLoaded}
              />

              {/* {JSON.stringify(data)} */}
            </>
          );
        }}
      />
      <div className="mt-11">
        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  );
};

export default TextEditor;
