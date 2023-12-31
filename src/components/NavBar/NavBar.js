import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import banner from "./assets/banner.jpg"
import amiibo from "./assets/amiibo.png";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="hero">
            <section className="hero-body">
                <img className="banner" src={banner} alt="banner" />
                    <div className="header-content-container">
                        <div className="logo-container">
                            <img id="logo" src={amiibo} alt="logo" draggable="false"/>
                            <h1 className="title">Amiibo Shop</h1>
                        </div>
                        <div className="link-container">
                            <Link className="navbar-link" to="/">Home</Link>
                            <Link className="navbar-link" to="products">Products</Link>
                        </div>
                        <CartWidget></CartWidget>
                    </div>
            </section>
        </div>
    )
}

export default NavBar