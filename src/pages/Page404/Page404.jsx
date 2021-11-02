import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
      <h1>404 not found :(</h1>
      <Link to="/">Go to home</Link>
    </div>
  )
}

export default Page404
