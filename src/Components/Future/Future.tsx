import React, {useState, useEffect} from 'react'
import './Future.scss'
import Return from '../Return/Return'
import Footer from '../Footer/Footer'

function Future() {
  const [project, setProject] = useState('NXTDES 2.0');
  const [text, setText] = useState('NXTDES (Next Destination) is my travel blog, but it has not been touched since August 2022, and it can use an upgrade. In order to make it good, I have to basically remake it entirely, because it is not well build fundamentally. I want to make it in such a way so that it will be easier to add new page and thus take less time to update.');
  const [stack, setStack] = useState(['React', 'TypeScript', 'Express', 'NodeJS', 'MongoDB', 'Sass']);
  const [mockStack, setMockStack] = useState(['React', 'TypeScript', 'Express', 'NodeJS', 'MongoDB', 'Sass']);
  const [mockProject, setMockProject] = useState('NXTDES 2.0');
  const [opacity, setOpacity] = useState(1);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    function handleFuture() {
      setOpacity(0);
      setTimeout(() => {
        setProject(mockProject);
        setStack(mockStack);
        setOpacity(1);
        if (mockProject === 'NXTDES 2.0') {
          setText('NXTDES (Next Destination) is my travel blog, but it has not been touched since August 2022, and it can use an upgrade. In order to make it good, I have to basically remake it entirely, because it is not well build fundamentally. I want to make it in such a way so that it will be easier to add new page and thus take less time to update.');
        }
        if (mockProject === 'Unknown') {
          setText('Still looking for inspiration on what to work on...');
        }
        if (mockProject === 'Unknown 2') {
          setText('Still looking for inspiration on what to work on...');
        }
    }, 250);
    }
    if (clicked) {
      handleFuture();
      setClicked(false);
    }
  }, [mockProject])

  return (
    <>
      <div className='future-box'>
        <Return/>
        <div className='future'>
          <div className='future-header'>
            <h1 className='future-title'>Future Projects</h1>
            <ul className='future-list'>
              <li onClick={() => {
                setMockProject('NXTDES 2.0');
                setMockStack(['React', 'TypeScript', 'Express', 'NodeJS', 'MongoDB', 'Sass']);
                setClicked(true);
                }} className={project === 'NXTDES 2.0' ? 'future-list-item active' : 'future-list-item'}>NXTDES 2.0</li>
              <li onClick={() => {
                setMockProject('Unknown');
                setMockStack(['T.B.A 1', 'T.B.A 2', 'T.B.A 3', 'T.B.A 4']);
                setClicked(true);
                }} className={project === 'Unknown' ? 'future-list-item active' : 'future-list-item'}>Unknown</li>
              <li onClick={() => {
                setMockProject('Unknown 2');
                setMockStack(['T.B.A 1', 'T.B.A 2', 'T.B.A 3', 'T.B.A 4']);
                setClicked(true);
                }} className={project === 'Unknown 2' ? 'future-list-item active' : 'future-list-item'}>Unknown 2</li>
            </ul>
          </div>
          <div className='future-project' style={{ opacity: opacity, transition: 'opacity .25s' }}>
            <div className='future-project-textbox'>
              <h2 className='future-project-textbox-title'>{project}</h2>
              <p className='future-project-textbox-text'>{text}</p>
            </div>
            <div className='future-project-techstack'>
              <h3 className='future-project-techstack-title'>Tech Stack</h3>
              <ul className='future-project-techstack-list'>
                {stack.map(item => <li key={item} className='future-project-techstack-list-item'>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-futurelocation'>
        <Footer/>
      </div>
    </>
  )
}

export default Future