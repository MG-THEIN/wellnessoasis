import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Home from "./Pages/Home.jsx"
import Example from "./Pages/Example.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
