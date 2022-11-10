import React from 'react'

const SaveButton = ({ btnText, disabled }) => {
  return (
    <div className="form-row">
      <button
        type="submit"
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        disabled={disabled}
      >
        {btnText}
      </button>
    </div>
  )
}

export default SaveButton
