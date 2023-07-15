import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const SharedLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default SharedLayout
