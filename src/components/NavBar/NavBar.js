import amiibo from "./assets/amiibo.png";

function NavBar() {
    return (
            <div className="hero">
                <section className="hero-body">
                    <div className="logo-container">
                        <img id="logo" src={amiibo} alt="logo" draggable="false"/>
                        <h1 className="title">Amiibo Shop</h1>
                    </div>
                </section>
            </div>
    )
}

export default NavBar