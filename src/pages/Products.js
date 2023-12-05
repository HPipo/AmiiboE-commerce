import { Outlet } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "../styles.css";
import "bulma/css/bulma.css";

function Products() {

    return (
        <div>
            <ItemListContainer></ItemListContainer>
            <Outlet/>
        </div>
    )
}

export default Products