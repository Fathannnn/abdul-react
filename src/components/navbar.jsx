import '../components/navbar'
import '../style/navbar.css'
import logo from '../images/logo.png'


function Navbar() {
    return (
       <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav_menu">
            <li className="nav_item"> <a href="#" className="nav_link">New & Featured</a></li>
            <li className="nav_item"> <a href="#" className="nav_link">men</a></li>
            <li className="nav_item"> <a href="#" className="nav_link">Women</a></li>
            <li className="nav_item"> <a href="#" className="nav_link">Kids</a></li>
            <li className="nav_item"> <a href="#" className="nav_link">Sale</a></li>
        </ul>
       </nav>
    )
}

export default Navbar;