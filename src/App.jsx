import HomePage from "./pages/HomePage"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import ShoppingCardPage from "./pages/ShoppingCardPage"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping-card" element={<ShoppingCardPage />} />
      </Routes>
    </div>
  )
}

export default App
