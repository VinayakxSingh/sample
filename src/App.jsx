import { Routes } from 'react-router-dom'
import './App.css';
import { useEffect } from 'react'
import Navbar from "./components/headers/Navbar.jsx"
import Routing from "./routes/routes.jsx"
import Footer from "./components/Footer/Footer"
import Lenis from 'lenis'
function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Smoothness of the scroll (higher value = smoother)
      easing: (t) => t, // Custom easing function for scrolling
      smoothWheel: true, // Enable smooth scrolling on wheel events
    });

    // Create an animation frame loop for smooth scroll updates
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Cleanup Lenis when the component is unmounted
      lenis.destroy();
    };
  }, []);

  return (<>
    <Navbar />
    <Routing/>
    <Footer/>
    </>
  )
}
export default App
