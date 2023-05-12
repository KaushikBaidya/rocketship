import { AiOutlineInfoCircle } from "react-icons/ai";
import React from "react";
import { useRouter } from "next/router";

const DetailsButton = ({ path }) => {
  const router = useRouter();
  return (
    <button
      className="bg-sky-500 w-12 h-10 btn"
      onClick={() => router.push(path)}
    >
      <AiOutlineInfoCircle size={24} />
    </button>
  );
};

export default DetailsButton;
