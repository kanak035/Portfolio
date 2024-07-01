import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Hero'
import Skills from './components/Skills'
// import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Aboutme from './components/Aboutme'
import BG_GRADIENT from './assets/bg3.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  return (
 
      <div className='bg-background'>
      <div
      style={{
        backgroundImage: `url(${BG_GRADIENT})`,
        backgroundPosition: `50% 50%`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}>
      <Navbar/>
      <Home/>
      </div>
      <Skills/>
      <Aboutme/>
      <Contact/>
      </div>
  
  )
}

export default App