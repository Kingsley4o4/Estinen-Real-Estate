import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/HomePage/home";
import Featured from "./Components/FeaturedPage/Featured";
import ClientReview from "./Components/ClientReview/ClientReview";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
       <Featured />
      <ClientReview />
      <Footer />
    </div>
  );
}

export default App;
