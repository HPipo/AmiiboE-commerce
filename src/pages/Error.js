import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons"

function Error() {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faFaceSadTear}/>
                <h1>Oh no! Something went wrong, let's go back to home</h1>
                <Link className="navbar-link" to="/">Home</Link>
            </div>
        </div>
    )
}

export default Error