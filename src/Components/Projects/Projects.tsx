import React, {useState, useEffect} from 'react'
import './Projects.scss'
import Return from '../Return/Return';
import Footer from '../Footer/Footer';

function Projects() {
  const [opacity, setOpacity] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [project, setProject] = useState('Salt Student Overview');
  const [event, setEvent] = useState('Salt Student Overview');
  const [text, setText] = useState("Salt Student Overview is a web app for </salt> bootcamp students and instructors. It provides an organized view of important information such as test results, feedback, and the weekly topics covered. The website also displays a clear Google calendar. Instructors can manage test results and upload lecture slides. Salt Student Overview streamlines communication and organization for everyone involved in the bootcamp.");
  const [github, setGithub] = useState('https://github.com/RobArkesteijn/Salt-Student-Overview');
  const [youtube, setYoutube] = useState('https://www.youtube.com/watch?v=EnbXmdXHg1E');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleProject() {
      setOpacity(0);
      setTimeout(() => {
        setOpacity(1);
        setProject(event);
        if (event === 'Salt Student Overview'){
          setText("Salt Student Overview is a web app for </salt> bootcamp students and instructors. It provides an organized view of important information such as test results, feedback, and the weekly topics covered. The website also displays a clear Google calendar. Instructors can manage test results and upload lecture slides. Salt Student Overview streamlines communication and organization for everyone involved in the bootcamp.");
          setWebsite('');
          setGithub('https://github.com/RobArkesteijn/Salt-Student-Overview');
          setYoutube('https://www.youtube.com/watch?v=EnbXmdXHg1E');
        }
        if (event === 'NXTDES') {
          setText("NXTDES (Next Destination) is a travel blog that displays all the places I've travelled to over the past four years. On this website I give lots of information about what best ways to travel to a certain location is, or what places you should visit when going there. There is also some standard information about how to travel in general.");
          setWebsite('https://nxtdes.com');
          setGithub('https://github.com/RobArkesteijn/NXTDES-Updated');
          setYoutube('');
        }
        if (event === 'Full Stack Dictionary') {
          setText('Full Stack Dictionary is a full stack application that I made in less than two days. This was a project that had to be made during my bootcamp at SALT. It is app where as expected a user can look up any english word and get the defintion, synonyms etc. in return. The user can also log in and save words in his or her account, so that they can later look back if they forgot the defintion.');
          setWebsite('');
          setGithub('https://github.com/RobArkesteijn/Dictionary-App/tree/development');
          setYoutube('');
        }
      }, 250);
    }
    if (clicked) {
      handleProject();
      setClicked(false);
    }
  }, [event])
    
  return (
    <>
    <Return/>
    <div className='projects'>
      <div className='info-box'  style={{ opacity: opacity, transition: 'opacity .25s' }}>
        <p className='info-box-title'>{project}</p>
        <p className='info-box-text'>{text}</p>
        <ul className='info-box-list'>
          {website !== '' && <li className='info-box-list-item'><a className='info-box-list-link' href={website} target='_blank' rel="noreferrer">Website</a></li>}
          {youtube !== '' && <li className='info-box-list-item'><a className='info-box-list-link' href={youtube} target='_blank' rel="noreferrer">YouTube</a></li>}
          {github !== '' && <li className='info-box-list-item'><a className='info-box-list-link' href={github} target='_blank' rel="noreferrer">GitHub</a></li>}
        </ul>
      </div>
      <div className='projects-menu'>
        <p className='projects-title'>Projects</p>
        <ul className='projects-menu-list'>
        <li onClick={() => {
          setEvent('Salt Student Overview');
          setClicked(true);
          }} className={event === 'Salt Student Overview' ? 'projects-menu-list-item active' : 'projects-menu-list-item'}>Salt Student Overview</li>
          <li onClick={() => {
            setEvent('NXTDES');
            setClicked(true);
          }} className={event === 'NXTDES' ? 'projects-menu-list-item active' : 'projects-menu-list-item'}>NXTDES</li>
          <li onClick={() => {
            setEvent('Full Stack Dictionary');
            setClicked(true);
          }} className={event === 'Full Stack Dictionary' ? 'projects-menu-list-item active' : 'projects-menu-list-item'}>Full Stack Dictionary</li>
        </ul>
      </div>
      </div>
      <div className='footer-projectlocation'>
        <Footer/>
      </div>
    </>
  )
}

export default Projects