import React from "react";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";

const EditButton = ({ path, id }) => {
  const router = useRouter();
  return (
    <button className="btn-edit" onClick={() => router.push(path)}>
      <FiEdit />
    </button>
  );
};

export default EditButton;
