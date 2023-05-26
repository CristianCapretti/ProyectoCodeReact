import CartWidget from "./CartWidget"
import User from "./User"
const NavBar=()=>{

    return(
        //nav
        <div className="navbar bg-dark  ">
            <ul className="navbar-nav flex-row flex-wrap ">
                <li className="nav-item">
                    <a className="nav-link text-light ms-3" aria-current="page" href="#">Hombre</a>
                 </li>
                <li className="nav-item">
                    <a className="nav-link text-light ms-3" href="#">Mujer</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light ms-3" href="#">Destacado</a>
                </li>
            </ul>
            <ul className="navbar-nav flex-row flex-wrap ">
                <li className=" nav-item ms-3">
                    <User />
                </li>
                <li className="nav-item ms-3 me-3">
                   <CartWidget />
                 </li>
            </ul>
        </div>
    )


}
export default NavBar
