import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1 className="welcome">Welcome to the Amiibo shop!</h1>
            <div className="products-button-container">
                <Link to="Products" className="navbar-link">Search for Products!</Link>
            </div>
        </div>
    )
}

export default Home