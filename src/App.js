import ProductCard from "./components/ProductCard/ProductCard";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import mario from "./img/mario.jpg";
import luigi from "./img/luigi.jpg";
import isabelle from "./img/isabelle.jpg";
import "./styles.css";
import "bulma/css/bulma.css";

function App() {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <CartWidget></CartWidget>
            </div>
            <div className="container">
                <div className="column is-4">
                    <ProductCard title="Luigi" image={luigi} series="Super Mario Bros" price="50"></ProductCard>   
                </div>
                <div className="column is-4">
                    <ProductCard title="Isabelle" image={isabelle} series="Animal Crossing" price="60"></ProductCard>
                </div>
                <div className="column is-4">
                    <ProductCard title="Mario" image={mario} series="Super Mario Bros" price="50"></ProductCard>   
                </div>
            </div>
        </div>
    )
}

export default App