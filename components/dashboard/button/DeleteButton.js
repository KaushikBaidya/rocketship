import axios from "axios";
import React, { useState } from "react";
// import { useQueryClient } from "react-query";
// import { useDeleteData } from "../../../hooks/dataApi";
// import { useQueryClient } from "react-query";
import { FiTrash2 } from "react-icons/fi";
// import Modal from "../common/Modal";
// import { useDeleteData } from "../../hooks/dataApi";
// import Modal from "../Modal";

const DeleteButton = ({ path }) => {
  // console.log(_key, path);
  // const queryClient = useQueryClient();
  // const { mutateAsync } = useDeleteData();
  // const [open, setOpen] = useState(false);

  const deleteHandler = async () => {
    console.log(path);
    await axios.delete(path).then(() => console.log("deleted"));
  };

  return (
    <>
      <button
        className="btn-delete"
        onClick={() => {
          deleteHandler();
        }}
      >
        <FiTrash2 />
      </button>
      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center">
          <h3 className="mb-5 text-light text-xl font-medium">
            Are you delete this item?
          </h3>
          <button className="btn-edit" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="btn-delete" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </Modal> */}
    </>
  );
};

export default DeleteButton;
