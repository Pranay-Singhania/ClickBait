import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { HomePage } from "./pages/index";
// import { Cart } from "./pages/index";
// import { Category } from "./pages/index";
// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { Provider } from "react-redux";
import store from "./store/Store";

const Category = lazy(() => import("./pages/CategoryPage/CategoryPage"));
const Cart = lazy(() => import("./pages/CartPage/CartPage"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/category/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Category />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cart />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
