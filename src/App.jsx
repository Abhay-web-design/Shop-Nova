import { Routes, Route } from "react-router-dom";
import Intro from './pages/Intro'
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function App() {
  return (
  <Routes>
  <Route path="/" element={<Intro />} />
  <Route path="/home" element={<Home />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/product/:id" element={<ProductDetails />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />

</Routes>
   
  );
}

export default App;
