import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/DashBoard'
import Login from './components/Login'
import ProtectedRoot from './components/ProtectedRoot'
import Register from './components/Register'
import UserProfile from './components/UserProfile'


function App() {
  return (
    <>
      <Navbar/>
      <main className="container">
          <Routes>
            <Route path="/" element={<h2>Welcome to our App</h2>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
      </main>
    </>
  )
}

export default App
