import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="products/:categoryId" element={<Products/>}/>
                    <Route path="products/productlist/:productId" element={<Product/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App