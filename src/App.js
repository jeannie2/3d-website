import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavbarComp from "./components/Navbar"
import ContactFormPage from "./pages/ContactFormPage"
import SubmittedPage from "./pages/SubmittedPage"
import R3fPage from "./pages/R3f"
import Footer from "./components/Footer"

const App = () =>{
    return (
      <>
        <BrowserRouter>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<R3fPage /> } />
            <Route path="/order" element={<ContactFormPage /> } />
            <Route path="/submitted" element={<SubmittedPage />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    )
}

export default App
