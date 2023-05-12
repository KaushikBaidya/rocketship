import React, { useEffect, useRef } from "react";

export default function CKeditor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
      // DecoupledEditor: require("@ckeditor/ckeditor5-build-decoupled-document"),
    };
  }, []);
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
          // config={{
          //   // plugins: [Paragraph, Bold, Italic, Essentials],
          //   toolbar: ["bold", "italic"],
          // }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}

// import React from "react";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

// export default function CKeditor() {
//   return (
//     <div>
//       <CKEditor
//         editor={DecoupledEditor}
//         onInit={(editor) => {
//           editor.ui
//             .getEditableElement()
//             .parentElement.insertBefore(
//               editor.ui.view.toolbar.element,
//               editor.ui.getEditableElement()
//             );
//         }}
//         onChange={(event, editor) => {
//           const tmp = editor.getData();
//           this.setState({ text: data });
//         }}
//       />
//     </div>
//   );
// }
