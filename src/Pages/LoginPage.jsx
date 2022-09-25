import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>

      <p>
        Or <Link to="/register">register</Link>
      </p>
    </>
  )
}
