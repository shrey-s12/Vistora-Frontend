import HomePage from "./pages/HomePage"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import ShoppingCardPage from "./pages/ShoppingCardPage"
import { Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import YourAccountPage from "./pages/YourAccountPage"
import { useRetryCall } from "./hooks"
import { useEffect } from "react"
import { setCurrentUser } from "./slices/authSlice"
import { useDispatch } from "react-redux"

function layout(element) {
  return <>
    <header>
      <Navbar />
      <Header />
    </header>

    {element}

    <footer>
    </footer>
  </>
}

function App() {
  const dispatch = useDispatch();
  const [loading, userFetch] = useRetryCall('get');

  useEffect(() => {
    userFetch('https://vistora-backend.onrender.com/user/userInfo')
      .then(response => {
        dispatch(setCurrentUser({ email: response.data.user.username }));
      }).catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Routes >
        <Route path="/" element={layout(<HomePage />)} />
        <Route path="/shopping-card" element={layout(<ShoppingCardPage />)} />
        <Route path="/profile" element={layout(<ProfilePage />)} />
        <Route path="/your-account" element={layout(<YourAccountPage />)} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
