import AboutMe from "./components/AboutMe"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"


const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-black">
      <Navbar/>
      <HeroSection/> 
      <AboutMe/>
      <Skills/>
    </div>
  )
}

export default App
