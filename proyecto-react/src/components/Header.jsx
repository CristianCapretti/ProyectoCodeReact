import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header=()=>{

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7">
                    <h1>Urban</h1>
                </div>
                <div className="col-lg-5">
                    <CartWidget />
                </div>
            </div>
            <div>
                <NavBar />
            </div>   
        </div>
    )


}
export default Header;