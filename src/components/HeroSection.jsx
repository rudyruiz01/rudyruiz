import hero from '../assets/hero.PNG';

const HeroSection = () => {
  return (
    <header className=" w-full h-56 px-2 bg-[url('./assets/hero.PNG')] bg-contain bg-no-repeat bg-center flex flex-col items-center justify-around text-center sm:h-72 md:h-96 lg:h-[580px]">
      <div className="-z-10 w-full">
        <div className="flex flex-row justify-around">
          <div className="bg-gradient-to-r from-green-500 via-black to-blue-600 text-transparent bg-clip-text tracking-wide font-semibold -z-10 pr-24 sm:text-xl md:text-2xl lg:text-3xl">
            Texas A&M Alumni            
          </div>
          <div className="bg-gradient-to-r from-green-500 via-black to-blue-600 text-transparent bg-clip-text tracking-wide font-semibold -z-10 sm:text-xl md:text-2xl lg:text-3xl">
            Summa Cum Laude
          </div>
        </div>
        <h1 className="uppercase bg-gradient-to-r from-green-500 via-black to-blue-600 text-6xl tracking-widest font-medium text-transparent bg-clip-text pt-4 -z-10 sm:text-8xl md:text-9xl lg:text-[160px]">
        Limitless
        </h1> 
        <div className="flex flex-row justify-around sm:justify-around w-full pt-4">
          <div className="bg-gradient-to-r from-green-500 via-black to-blue-600 text-transparent bg-clip-text tracking-wide font-semibold pr-28 sm:text-xl md:text-2xl lg:text-3xl">
            Software Engineer
          </div>
          <div className="bg-gradient-to-r from-green-500 via-black to-blue-600 text-transparent bg-clip-text tracking-wide font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            Hire Me :)
          </div>
        </div>
      </div>           
        {/* <div>
          <a href="#" className="bg-blue-800 text-gray-300 mx-3 py-3 px-4 rounded-3xl text-xl z-10">
            Contact
          </a>  
          <a href="#" className="bg-black text-gray-300 mx-3 py-3 px-4 rounded-3xl text-xl relative z-10">
            Cover Letter
          </a>   
        </div>  */}
    </header>    
      
  )
}

export default HeroSection