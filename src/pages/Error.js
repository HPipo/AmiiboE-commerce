import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons"
import "../styles.css"

function Error() {
    return (
        <div>
            <div>
                <div className="error-container">
                    <FontAwesomeIcon icon={faFaceSadTear} className="fa-7x"/>
                    <h1 className="welcome">Oh no! Something went wrong, let's go back to home</h1>
                </div>
                <Link className="navbar-link" to="/">Home</Link>
            </div>
        </div>
    )
}

export default Error