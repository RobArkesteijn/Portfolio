import React, { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  const [aboutState, setAboutState] = useState(false);
  const [skillsState, setSkillsState] = useState(false);
  const [projectState, setProjectState] = useState(false);
  const [futureState, setFutureState] = useState(false);
  return (
    <>
      <div className="welcomepage">
        <div className="welcomepage__title">
          <div className="welcomepage__title-box">
            <p className="welcomepage__title-welcome">Welcome.</p>
            <div className="welcomepage__title-textbox">
              <p className="welcomepage__title-text">
                Hi my name is{" "}
                <strong>
                  <i>Rob Arkesteijn</i>
                </strong>
                , After gaining valuable life skills and experiences during my
                time in the Marines, I pursued a more theoretical path.
              </p>
              <p className="welcomepage__title-text welcomepage__title-text-middle">
                Driven by a passion for programming, I transitioned to the field
                of software development, where I have sharpened my skills &
                expertise to become a successful{" "}
                <strong>
                  <i>Full Stack JavaScript Developer</i>
                </strong>
                .
              </p>
              <p className="welcomepage__title-text">
                I am committed to continuous learning and eager to contribute my
                knowledge and expertise to a dynamic organisation.
              </p>
            </div>
          </div>
        </div>
        <div className="welcomepage__line-menu-container">
          <div className="welcomepage__line-container">
            <div
              className={
                aboutState
                  ? "welcomepage__animation-line welcomepage__animation-line-hover"
                  : "welcomepage__animation-line"
              }
            ></div>
            <div
              className={
                skillsState
                  ? "welcomepage__animation-line animation-line-hover"
                  : "welcomepage__animation-line"
              }
            ></div>
            <div
              className={
                projectState
                  ? "welcomepage__animation-line welcomepage__animation-line-hover"
                  : "welcomepage__animation-line"
              }
            ></div>
            <div
              className={
                futureState
                  ? "welcomepage__animation-line welcomepage__animation-line-hover"
                  : "welcomepage__animation-line"
              }
            ></div>
          </div>
          <div className="welcomepage__menu">
            <ul className="welcomepage__menu-list">
              <li className="welcomepage__menu-list-item">
                <Link
                  onMouseOver={() => setAboutState(true)}
                  onMouseOut={() => setAboutState(false)}
                  className="welcomepage__menu-list-item-link"
                  to="/about"
                >
                  About Me
                </Link>
              </li>
              <li className="welcomepage__menu-list-item">
                <Link
                  onMouseOver={() => setSkillsState(true)}
                  onMouseOut={() => setSkillsState(false)}
                  className="welcomepage__menu-list-item-link"
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="welcomepage__menu-list-item">
                <Link
                  onMouseOver={() => setProjectState(true)}
                  onMouseOut={() => setProjectState(false)}
                  className="welcomepage__menu-list-item-link"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="welcomepage__menu-list-item">
                <Link
                  onMouseOver={() => setFutureState(true)}
                  onMouseOut={() => setFutureState(false)}
                  className="welcomepage__menu-list-item-link"
                  to="/future"
                >
                  Future
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="welcomepage__footer-location">
        <Footer />
      </div>
    </>
  );
}

export default App;
