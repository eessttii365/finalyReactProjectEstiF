import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AdminHome from "./admin/AdminHome"
import Login from "./admin/Login"
import UserHome from "./user/UserHome"

const Route = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <UserHome />
        },
        {
            path: "/admin",
            element: <AdminHome />
        },
        {
            path: "/login",
            element: <Login />
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Route