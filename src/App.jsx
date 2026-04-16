
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar.jsx/Navbar'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
