import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Welcome to the Amiibo shop!</h1>
            <Link to="Products">Search for Products!</Link>
        </div>
    )
}

export default Home