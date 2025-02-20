import {Navigate, Outlet} from "react-router-dom"

const PrivateRoute = () => {
    const isAdmin = localStorage.getItem("user")

    return isAdmin ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
