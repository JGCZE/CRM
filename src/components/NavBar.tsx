import "./NavBar.css"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <header>
            <nav className="nav">
                <NavLink to="/"> Domů </NavLink>
                <NavLink to="form"> Přidat Klienta </NavLink>
            </nav>
        </header>
    )
}

export default NavBar
