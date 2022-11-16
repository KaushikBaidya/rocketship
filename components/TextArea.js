import React from 'react'
import ErrorMessage from './ErrorMessage'

const TextArea = ({
  name,
  label,
  type = 'text',
  register,
  errorMessage = '',
  isAutoFocus = false,
  isReadOnly = false,
  showPlaceHolder = false,
}) => {
  return (
    <div className="form-row w-full">
      {showPlaceHolder === false && <label>{label}</label>}
      <textarea
        type={type}
        className="form-new-input"
        {...register(name)}
        autoFocus={isAutoFocus}
        readOnly={isReadOnly}
        placeholder={showPlaceHolder === true ? label : ''}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  )
}

export default TextArea

// import React from 'react'
// import ErrorMessage from './ErrorMessage'
// import { Controller } from 'react-hook-form'

// const TextArea = ({
//   control,
//   name,
//   label,
//   errorMessage = '',
//   //isAutoFocus = false,
// }) => {
//   return (
//     <div className="form-row w-full">
//       <label>{label}</label>
//       <Controller
//         control={control}
//         name={name}
//         render={({ field }) => (
//           <textarea
//             className={
//               errorMessage
//                 ? 'h-40 form-control input-border-danger'
//                 : 'h-40 form-control input-border-primary'
//             }
//             {...field}
//             //autoFocus={isAutoFocus}
//           />
//         )}
//       />
//       <ErrorMessage message={errorMessage} />
//     </div>
//   )
// }

// export default TextArea
