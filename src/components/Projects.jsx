import { projects } from '../constants/index.jsx';

const Projects = () => {
  return (
    <div className="w-full h-fit px-2 flex flex-col bg-gray-900 roboto-regular text-slate-200 items-center" id="project-section">
      <h2 className="font-medium text-5xl w-fit pr-2 mb-5 mt-4 tracking-widest shadow-[15px_10px_0px_0px_rgba(153,27,27,1)]">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center w-72 p-3 rounded-md bg-gray-600 md:w-96">
            {/* Project Title */}
            <div className="text-xl tracking-wider font-medium mb-3">
              {project.name}
            </div>
            {/* Image */}
            <div className="flex w-72 h-96 mb-4 justify-center">
              {project.name == 'Real Estate Management Web App' ? 
              <img src={project.image} alt="" className="object-contain w-40 h-40 self-center"/> :
              <img src={project.image} alt="" className="object-fill overflow-hidden"/>
              }
            </div>
            {/* Links */}
            <div className="flex flex-col mb-3 md:flex-row">
              {'website' in project && (
                <button className="text-md text-slate-200 font-semibold tracking-wider bg-black rounded-3xl py-2 px-14 mb-3 md:mr-3 md:mb-0">
                  <a href={project.website} target="_blank">Website</a>                
                </button> 
              )}               
              <button className="text-md text-red-700 font-semibold tracking-wider bg-slate-300 border-red-800 rounded-3xl py-2 px-14">
                <a href={project.github} target="_blank">GitHub</a>
              </button>
            </div>
            {/* Technologies Used */}
            <div className="flex flex-wrap self-start">
              {project.technologies.map((tech, index) => (
              <div key={index} className="rounded-3xl py-1 px-5 bg-[rgba(153,27,27,1)] mr-3 mb-2">
                {tech}
              </div>
              ))}
            </div>                        
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects