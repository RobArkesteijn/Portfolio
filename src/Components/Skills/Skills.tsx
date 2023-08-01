import { useEffect } from "react";
import "./Skills.scss";
import Return from "../Return/Return";

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Return />
      <div className="skills-title-box">
        <h1 className="skills-title">Development tools I've worked with..</h1>
      </div>
      <div className="icon-box">
        <div className="icon-row1 icon-column icon-first">
          <i className="devicon-sass-original icon icon25"></i>
          <i className="devicon-vscode-plain icon icon26"></i>
        </div>
        <div className="icon-row2 icon-column">
          <i className="devicon-html5-plain-wordmark icon icon1"></i>
          <i className="devicon-css3-plain icon icon2"></i>
          <i className="devicon-materialui-plain icon icon3"></i>
        </div>
        <div className="icon-row3 icon-row">
          <i className="devicon-express-original icon icon7"></i>
          <i className="devicon-bash-plain icon icon8"></i>
          <i className="devicon-eslint-original-wordmark icon icon9"></i>
        </div>
        <div className="icon-row4 icon-row">
          <i className="devicon-firebase-plain-wordmark icon icon10"></i>
          <i className="devicon-filezilla-plain icon icon11"></i>
          <i className="devicon-git-plain icon icon12"></i>
        </div>
        <div className="icon-row5 icon-row">
          <i className="devicon-github-original icon icon13"></i>
          <i className="devicon-handlebars-plain icon icon14"></i>
          <i className="devicon-jest-plain icon icon15"></i>
        </div>
        <div className="icon-row6 icon-row">
          <i className="devicon-mocha-plain icon icon16"></i>
          <i className="devicon-mongodb-plain-wordmark icon icon17"></i>
          <i className="devicon-nodejs-plain icon icon18"></i>
        </div>
        <div className="icon-row7 icon-row">
          <i className="devicon-tailwindcss-plain icon icon19"></i>
          <i className="devicon-vuejs-plain icon icon20"></i>
          <i className="devicon-npm-original-wordmark icon icon21"></i>
        </div>
        <div className="icon-row8 icon-row">
          <i className="devicon-python-plain icon icon22"></i>
          <i className="devicon-react-original icon icon23"></i>
          <i className="devicon-redux-original icon icon24"></i>
        </div>
        <div className="icon-row9 icon-column">
          <i className="devicon-jquery-plain-wordmark icon icon4"></i>
          <i className="devicon-javascript-plain icon icon5"></i>
          <i className="devicon-typescript-plain icon icon6"></i>
        </div>
        <div className="icon-row10 icon-column icon-last">
          <i className="devicon-webpack-plain icon icon27"></i>
          <i className="devicon-postgresql-plain-wordmark icon icon28"></i>
        </div>
      </div>
    </>
  );
}

export default Skills;
