import hero from '../assets/hero.PNG'

const AboutMe = () => {
  return (
    <div className="flex flex-row justify-around pt-10 bg-black">
      <img src={hero} alt="" className="w-1/3"/>
      <p className="w-2/3 text-center">
        An electrician turned software engineer. 
      </p>
    </div>
  )
}

export default AboutMe