import hero from '../assets/hero.jpeg';

const HeroSection = () => {
  return (
    <header className="w-full h-[500px] px-2 bg-[url('./assets/hero-mobile.jpeg')] sm:bg-[url('./assets/hero.jpeg')] bg-top bg-cover bg-no-repeat lg:h-[580px] overflow-hidden">
      <div className="w-full h-full pl-2 md:pl-12 lg:pl-32 text-center">
        <h1 className="text-red-800 text-5xl tracking-widest font-bold bg-clip-text pt-6 text-center md:text-left lg:pt-24 sm:text-6xl md:text-7xl lg:text-8xl">
          RUDY RUIZ
        </h1>
        <div className="text-slate-200 tracking-wide font-semibold pt-32 text-xl md:text-2xl md:text-left md:pt-12 lg:text-2xl">
          Software Engineer        
        </div>
        <div className="text-slate-200 tracking-wide font-semibold pt-4 text-xl md:text-2xl lg:text-left lg:text-2xl lg:pl-72">
          Texas A&M Alumni 
        </div>
        <div className="text-slate-200 tracking-wide font-semibold pt-4 text-xl md:text-2xl md:text-left lg:text-2xl">
          Summa Cum Laude 
        </div>
        <div className="flex flex-col justify-center pt-12 md:flex-row sm:justify-start">
          <a href="https://drive.google.com/file/d/1tuHwfPlsNrmj1DVkdX4DeaWjAO8bv8Sk/view?usp=share_link" target="_blank" className=" text-md text-slate-200 font-semibold tracking-wider bg-red-700 rounded-md py-3 px-4 mb-3 md:text-xl md:mb-0 md:mr-5 md:px-16">
            Resume              
          </a>  
          <button className="text-md text-red-700 font-semibold tracking-wider bg-slate-200 border-2 border-red-800 rounded-md py-3 px-4 md:text-xl md:px-16">
            Contact
          </button>
        </div>      
      </div>           
    </header>          
  )
}

export default HeroSection