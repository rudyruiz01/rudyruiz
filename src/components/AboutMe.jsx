import hero from '../assets/hero.PNG';

const AboutMe = () => {
  return (
    <div className="w-full h-[500px] px-2 flex flex-col bg-black lg:h-[580px]overflow-hidden">
      <div className="text-slate-200 text-2xl mt-4 pr-2 self-center shadow-[15px_15px_0px_0px_rgba(153,27,27,1)] sm:text-3xl">
        <h2 className="w-fit">Who Is He</h2>
      </div>
      <div className="sm:flex flex-row text-sm max-h-max overflow-hidden">
        <div className="hidden sm:flex sm:w-1/3 justify-center">
          <img src={hero} alt="" className="max-h-full"/>
        </div>
        <div className="text-slate-200 flex flex-col sm:w-2/3 sm:pl-12 sm:pt-12">
          <p className="mb-5">
          An electrician turned software engineer. After an unfulfilling role as an electrician he set off to find a new passion. He found software and took on the challenge of obtaining a Bachelors of Science in Computer Science. Against the odds of being a first gen, he obtained academic scholarships, graduated with Summa Cum Laude Honors, and gained internship experience. 
          </p>
          <p className="pb-3">
            As the story continues into the next chapter of life, he intends to keep the momentum. Since graduation, he's attained an AWS certification, built a portfolio website, and is working on a real estate web application, a side passion of his.
          </p>
          <div>
            <button className="text-md w-full text-red-700 font-semibold tracking-wider bg-slate-200 border-2 border-red-800 rounded-md py-3 md:w-1/2 md:text-xl">
              Contact
            </button> 
          </div>
        </div>
      </div> 
    </div>
  )
}

export default AboutMe