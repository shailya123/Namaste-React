import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError();
  return (
    <div>
      <h1>Oops something went wrong!!</h1>
      <h2>{error?.data}</h2>
    </div>
  )
}

export default Error
