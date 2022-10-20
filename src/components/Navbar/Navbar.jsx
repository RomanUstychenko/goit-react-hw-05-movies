import NavbarMenu from "components/NavbarMenu/NavbarMenu"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <div>
            <Link to="/">Logo</Link>
            <NavbarMenu />
        </div>
    
    </nav>
  )
}
