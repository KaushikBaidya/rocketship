import React from "react";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";

// import { useHistory } from "react-router";

const EditButton = ({ path }) => {
  const router = useRouter();
  // const history = useHistory();
  return (
    <button
      className="btn-edit"
      //  onClick={() => history.push(path)}
      onClick={() => router.push(path)}
    >
      <FiEdit />
    </button>
  );
};

export default EditButton;
