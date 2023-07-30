import React from "react";
// import React, {useMemo} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import ShopPage from "./pages/Store";
import BookmarkedPage from "./pages/Bookmarked";
import AboutPage from "./pages/About";

import R3fPage from "./pages/R3f";

import Footer from "./components/Footer";

import BookmarkedState from "./context/BookmarkedState";

const App = () =>{
//  const Canv = useMemo(() => (
//       <R3fPage/>
//   ), []);

    return (
      <>
      {/* <div>
      {Canv}
      </div> */}

        {/* <BrowserRouter> */}
          <NavbarComp />
          <BookmarkedState>
          <Routes>
            <Route path="/" element={<ShopPage /> } />
            <Route path="/bookmarked" element={<BookmarkedPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/r3f" element={<R3fPage />} />
            {/* <Route path="/r3f" element={<Canv />} /> */}
             {/* element={<R3fPage />} */}
          </Routes>

          {/* <Footer/> */}
          </BookmarkedState>
        {/* </BrowserRouter> */}
      </>
    )
}

export default App
