import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="products/cards" element={<Products/>}/>
                    <Route path="products/figures" element={<Products/>}/>
                    <Route path="products/yarns" element={<Products/>}/>
                    <Route path="products/productlist/:productsId" element={<Product/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App