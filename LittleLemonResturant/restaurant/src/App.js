import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Main } from "./components/MainSection";
import BookingPage from "./pages/bookingPage";
import ConfirmationPage from "./pages/confirmationPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/orderConfirm" element={<ConfirmationPage />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
