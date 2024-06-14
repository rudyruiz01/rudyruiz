import { skills } from '../constants';

const Skills = () => {
  return (
    <div className="w-full h-fit px-2 flex flex-col bg-gray-900 overflow-hidden roboto-regular text-slate-300">
      <h2 className="text-slate-200 font-medium text-5xl self-center w-fit pr-2 mb-5 mt-4 tracking-widest shadow-[15px_10px_0px_0px_rgba(153,27,27,1)]">Skills</h2>
      <div className="grid grid-cols-2 gap-y-8 py-4 place-items-center max-w-fit self-center sm:grid-cols-3 sm:gap-x-8 md:grid-cols-4 md:gap-x-10 lg:gap-x-24">
        {skills.map((skill, index) => (
          <figure className="flex flex-col items-center rounded-md p-4 bg-gray-600 w-fit m-3 shadow-[15px_10px_0px_0px_rgba(153,27,27,1)]">
            <img src={skill.icon} alt={skill.alt} className="w-32 h-32"/>
            <figcaption className="text-xl pt-3 text-slate-100">
              {skill.label}
            </figcaption>
          </figure>
        ))} 
      </div>      
    </div>
  )
}

export default Skills