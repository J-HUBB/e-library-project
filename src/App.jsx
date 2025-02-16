import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
   setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* Use Routes to wrap your Route components */}
          <Route path="/" element={<Home />} /> {/* Use element prop */}
          <Route path="/books" element={<Books books={books} />} />{" "}
          {/* Use element prop */}
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}
          />{" "}
          {/* Dynamic route with :id */}
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
