import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import User from "./User";
import Logo from "./images/logo2.png"
const Header=()=>{

    return(
        <div className="container-fluid ">
            <div className="row  headerSyle ">
                <div className="col-lg-11 ">
                    <h1> <img src={Logo} alt="Carrito" width={45} /> Urban Shop</h1>
                    
                </div>
                <div className="col-lg-1 text-end ">
                    <div className="row justify-content-center">
                       
                    </div>
                   
                </div>
            </div>
            <div>
                <NavBar />
            </div>   
        </div>
    )


}
export default Header;