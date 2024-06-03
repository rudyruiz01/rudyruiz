import AboutMe from "./components/AboutMe"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-black">
      <Navbar/>
      <HeroSection/> 
      <AboutMe/>
    </div>
  )
}

export default App
