import {navItems} from '../constants/index.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-3xl bg-black opacity-85 text-slate-200">
      <div className="px-4 py-3 max-w-screen-xl mx-auto"> 
        <div className="flex items-center justify-between">
          <div className="roboto-medium tracking-[.2rem]">
            Rudy Ruiz
          </div>
          {/* Navigation Sections */}
          <ul className="hidden md:flex flex-row">
            {navItems.map((item, index) => (
              <li key={index} className="mr-8">
                <a href={item.href}>{item.label}</a>            
              </li>
            ))}
          </ul>
          {/* Social Links */}
          <div className="hidden md:flex justify-center items-center">
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 mr-3'/>      
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6'/>
            </a>       
          </div>
          {/* Mobile Toggle Button */}
          <div className="md:hidden w-6 h-6">
            <button onClick={toggleNavbar}>
              {mobileMenuOpen ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/> }
            </button>
          </div>
        </div>
        {/* Mobile Navigation Section */}
        {mobileMenuOpen && (
          <div className="fixed right-0 text-center w-full flex flex-col justify-center items-center bg-black text-gray-300 md:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 mr-3 py-4'/>      
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6 py-4'/>
            </a>  
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar