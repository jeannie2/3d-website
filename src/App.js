import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import ShopPage from "./pages/Store";
import BookmarkedPage from "./pages/Bookmarked";
import AboutPage from "./pages/About";

import BookmarkedState from "./context/BookmarkedState";

const App = () =>{
    return (
      <>
        <BrowserRouter>
          <NavbarComp />
          <BookmarkedState>
          <Routes>
            <Route path="/" element={<ShopPage /> } />
            <Route path="/bookmarked" element={<BookmarkedPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          </BookmarkedState>
        </BrowserRouter>
      </>
    )
}

export default App
