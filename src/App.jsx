import { Routes } from 'react-router-dom'
import './App.css';
import Navbar from "./components/headers/Navbar.jsx"
import Routing from "./routes/routes.jsx"
import Footer from "./components/Footer/Footer"

function App() {


  return (<>
    <Navbar />
    <Routing/>
    <Footer/>
    </>
  )
}
export default App
