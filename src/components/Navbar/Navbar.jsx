import NavbarMenu from "components/NavbarMenu/NavbarMenu"
// import { Link } from "react-router-dom"
import scss from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={scss.navbarList}>
        <div>
            <NavbarMenu />
        </div>
    
    </nav>
  )
}
