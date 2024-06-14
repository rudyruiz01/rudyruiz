// skills icons
import react from '../assets/icons/react.svg';
import aws from '../assets/icons/aws.svg';
import java from '../assets/icons/java.svg';
import cpp from '../assets/icons/cpp.svg';
import csharp from '../assets/icons/csharp.svg';
import css from '../assets/icons/css.svg';
import html from '../assets/icons/html.svg';
import javascript from '../assets/icons/javascript.svg';
import gitlab from '../assets/icons/gitlab.svg';
import github from '../assets/icons/github.svg';
import selenium from '../assets/icons/selenium.svg';
import sql from '../assets/icons/sql.png';
import tailwind from '../assets/icons/tailwind.svg';

// project thumbnails
import portfolioImg from '../assets/hero-mobile.jpeg';
import jjsWebsiteImg from '../assets/jjsthumbnail.jpeg';
import javaProjectImg from '../assets/javaProjectThumbnail.png';
import realestateImg from '../assets/realestateThumbnail.gif';

export const navItems = [
  {label: "About Me", href: "#"},
  {label: "Projects", href: "#project-section"},
  {label: "Resume", href: "#"},
  {label: "Contact", href: "#"}
];

export const skills = [
  {icon: react, label: 'React', alt: 'react logo'},
  {icon: aws, label: 'AWS', alt: 'aws logo'},
  {icon: java, label: 'Java', alt: 'java logo'},
  {icon: cpp, label: 'C++', alt: 'c plus plus logo'},
  {icon: csharp, label: 'C#', alt: 'c sharp logo'},
  {icon: css, label: 'CSS', alt: 'css logo'},
  {icon: html, label: 'HTML', alt: 'html logo'},
  {icon: javascript, label: 'Javascript', alt: 'javascript logo'},
  {icon: gitlab, label: 'GitLab', alt: 'gitlab logo'},
  {icon: github, label: 'GitHub', alt: 'github logo'},
  {icon: selenium, label: 'Selenium', alt: 'selenium logo'},
  {icon: sql, label: 'SQL', alt: 'SQL icon'},
  {icon: tailwind, label: 'Tailwind CSS', alt: 'Tailwind CSS icon'}
]

export const projects = [
  {name: "Portfolio Website", image: portfolioImg, website: "http://rudyruiz.dev", github:"https://github.com/rudyruiz01/rudyruiz", technologies:['React', 'Tailwind CSS', 'GitHub', 'Hostinger']},
  {name: "JJs Party Packs Website", image: jjsWebsiteImg, website: "http://jjspartypacks.com/", github:"https://github.com/rudyruiz01/jjs-party-packs", technologies:['Javascript', 'HTML', 'CSS', 'AWS S3', 'AWS route53']},
  {name: "Java Term Project", image: javaProjectImg, github:"https://github.com/rudyruiz01/Java-Term-Project", technologies:['Java']},
  {name: "Real Estate Management Web App", image: realestateImg, website: "", github:"", technologies:['Coming Soon']},
]