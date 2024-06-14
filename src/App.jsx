import AboutMe from "./components/AboutMe"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Test from "./components/Test"


const App = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar/>
        <HeroSection/> 
        <main>
          <AboutMe/>
          <Projects/>
          <Skills/>          
        </main>  
      </div>        
    </div>
  )
}

export default App
