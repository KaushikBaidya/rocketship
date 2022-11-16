import React from 'react'

const SaveButton = ({ btnText, disabled, isRow = true }) => {
  return (
    <div className={isRow ? 'form-row w-full' : 'md:mt-6'}>
      <button type="submit" className="save-btn" disabled={disabled}>
        {btnText}
      </button>
    </div>
  )
}

export default SaveButton
