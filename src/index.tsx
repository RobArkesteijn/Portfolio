import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Future from './Components/Future/Future';
import Projects from './Components/Projects/Projects';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={App}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/skills' Component={Skills}></Route>
      <Route path='/projects' Component={Projects}></Route>
      <Route path='/future' Component={Future}></Route>
    </Routes>
  </BrowserRouter>
);


