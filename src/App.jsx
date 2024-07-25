import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUpPage from './Components/SignUpPage'
import LogInPage from './Components/LogInPage'
import PasswordResetPage from './Components/PasswordResetPage'
import './App.css'
import ResetPage from './Components/ResetPage'
import SuccessMsg from './Components/SuccessMsg'
import NotFoundPage from './Components/NotFoundPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<SignUpPage/>
    },
    {
      path: "/login",
      element:<LogInPage/>
    },
    {
      path: "/forgotpassword",
      element:<PasswordResetPage/>
    },
    {
      path: "/resetpage/:verificationString",
      element:<ResetPage/>
    },
    {
      path: "/404page",
      element:<NotFoundPage/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App