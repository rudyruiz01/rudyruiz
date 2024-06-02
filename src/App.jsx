import AboutMe from "./components/AboutMe"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto min-w-full">
      <Navbar/>
      <HeroSection/> 
      <AboutMe/>
    </div>
  )
}

export default App
