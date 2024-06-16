import aboutImg from '../assets/about.jpeg';

const AboutMe = () => {
  return (
    <div className="w-full px-2 flex flex-row bg-gray-900 overflow-hidden roboto-regular" id="about-section">      
      <div className="sm:flex flex-row text-sm max-h-max overflow-hidden my-8">
        <div className="flex sm:w-2/5 justify-center">
          <img src={aboutImg} alt="" className="object-contain max-w-96 mx-auto overflow-hidden"/>
        </div>
        <div className="text-slate-400 flex flex-col pt-4 sm:w-3/5 sm:pl-12 sm:pt-8">
          <h2 className="text-slate-200 font-medium text-5xl self-center w-fit pr-2 mb-5 sm:self-start tracking-wider shadow-[15px_10px_0px_0px_rgba(153,27,27,1)] ">
            Who Is He
          </h2>
          <h3 className="text-lg font-medium sm:text-xl tracking-wide text-slate-200">
            Electrician to Engineer
          </h3>
          <p className="mb-3 md:text-md lg:text-xl">
          An electrician turned software engineer. After an unfulfilling role as an electrician he set off to find a new passion. He found software and took on the challenge of obtaining a Bachelors of Science in Computer Science. Against the odds of being a first gen, he obtained academic scholarships, graduated with Summa Cum Laude Honors, and gained internship experience. 
          </p>
          <h3 className="text-lg font-medium sm:text-xl tracking-wide text-slate-200">
            What's Next
          </h3>
          <p className="pb-1 md:text-md lg:text-xl">
            As the story continues into the next chapter of life, he intends to keep that momentum. Since graduation, he's attained an AWS certification, built a portfolio website, and is working on a real estate web application, a side passion of his.
          </p>
          <div className="pt-4">
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