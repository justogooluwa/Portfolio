import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './components/Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css"
function App() {

    useEffect(() => {
    AOS.init({ duration: 900, once:false});
  }, []);

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
     </Router>
    </>
  )
}

export default App
