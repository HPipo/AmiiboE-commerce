import ProductCard from "./components/ProductCard/ProductCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import mario from "./img/mario.jpg";
import luigi from "./img/luigi.jpg";
import isabelle from "./img/isabelle.jpg";
import "./styles.css";
import "bulma/css/bulma.css";

function App() {
    return (
        <div>
            <div className="header-container">
                <NavBar></NavBar>
            </div>
            <div className="body-container">
                <section className="list-container">
                    <div>
                        <ItemListContainer></ItemListContainer>
                    </div>
                </section>
                <section className="products-container">
                    <div className="column is-3">
                        <ProductCard title="Luigi" image={luigi} series="Super Mario Bros" price="50"></ProductCard>   
                    </div>
                    <div className="column is-3">
                        <ProductCard title="Isabelle" image={isabelle} series="Animal Crossing" price="60"></ProductCard>
                    </div>
                    <div className="column is-3">
                        <ProductCard title="Mario" image={mario} series="Super Mario Bros" price="50"></ProductCard>   
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App