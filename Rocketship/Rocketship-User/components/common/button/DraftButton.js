import React from "react";

const DraftButton = ({ btnText, disabled, isRow = true }) => {
  return (
    <div className={isRow ? "form-row w-full" : "md:mt-6"}>
      <button type="submit" className="draft-btn" disabled={disabled}>
        {btnText}
      </button>
    </div>
  );
};

export default DraftButton;
