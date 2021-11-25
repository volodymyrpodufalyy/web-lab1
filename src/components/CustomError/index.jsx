import React from 'react'

import "./CustomError.scss";


const CustomError = ({error}) => {
  return (
    <p className="error">
      {error}
    </p>
  )
}

export default CustomError;
