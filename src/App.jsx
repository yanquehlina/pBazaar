import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"
import Landing from "./pages/Landing"
import Profile from "./pages/Dashboard/Profile"


function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "signup",
      element: <SignUp />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path:"dashboard",
      element: <Profile />
    }
    
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
