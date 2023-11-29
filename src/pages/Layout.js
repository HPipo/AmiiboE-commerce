import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <div className="header-container">
                <NavBar></NavBar>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout