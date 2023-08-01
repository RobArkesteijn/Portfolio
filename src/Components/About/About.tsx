import React, { useEffect, useState } from "react";
import "./About.scss";
import Footer from "../Footer/Footer";
import Return from "../Return/Return";

function About() {
  const [left, setLeft] = useState("5vw");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handlePage(num: number) {
    if (num === 1) {
      setLeft("5vw");
    }
    if (num === 2) {
      setLeft("-85vw");
    }
    if (num === 3) {
      setLeft("-175vw");
    }
  }

  return (
    <>
      <div className="about">
        <Return />
        <h1 className="about-title">A little bit about who I am..</h1>
        <div className="about-text" style={{ left: left }}>
          <ul className="about-text-list">
            <li className="about-text-list-item-first">
              My name is{" "}
              <strong>
                <i>Rob Arkesteijn</i>
              </strong>{" "}
              and I'm a{" "}
              <strong>
                <i>Full Stack JavaScript Developer</i>
              </strong>
              . I began my journey as a developer back in April 2022, when I
              first started learning the basics of HTML and CSS. Soon after, I
              delved into the world of JavaScript, starting with writing
              functions on Edabit to become familiar with the language's many
              methods. As I gained more knowledge, I wanted to put it to the
              test by creating my own projects. It was through these projects
              that I truly began to learn how to implement JavaScript in a
              website, and I discovered just how complex the code can become as
              the project grows larger and more intricate. In January 2023, I
              took my learning to the next level by attending a bootcamp at
              SALT. During this program, I was exposed to a variety of
              development tools that allowed me to broaden my skills and
              ultimately develop my own Full Stack Application. But what drove
              me to start learning web development in the first place?
            </li>
            <li className="about-text-list-item">
              In 2019, I finished high school and decided to travel alone to
              Southeast Asia. This was a big step for an 18-year-old, as it
              meant going out of my comfort zone and taking responsibility for
              whatever might happen. Being far from home gave me the chance to
              think creatively about my future. While reading "Can't Hurt Me" by
              David Goggins, I felt inspired to join the{" "}
              <strong>
                <i>military</i>
              </strong>
              . I discovered that the most challenging military training in the
              Netherlands was to become a{" "}
              <strong>
                <i>marine</i>
              </strong>
              , and I wanted to see if I had what it takes. After a year of
              daily training, sometimes up to three times a day, and selection
              tests, I began the actual training. Did I underestimate the
              challenge? Definitely. Did that stop me? Not for a second. After
              about five months of training, I graduated from being a
              third-class marine to a{" "}
              <strong>
                <i>second-class marine</i>
              </strong>
              .{" "}
            </li>
            <li className="about-text-list-item-last">
              After completing the first half of my marine training, I had to
              make a tough decision. Continuing would mean committing to at
              least four years of service, but for various reasons, I decided
              not to. Despite this, I knew that the work ethic I had developed
              in the marines would serve me well in whatever I did next. That
              next thing turned out to be studying{" "}
              <strong>
                <i>Applied Mathematics</i>
              </strong>{" "}
              at the{" "}
              <strong>
                <i>The Hague University of Applied Sciences</i>
              </strong>
              . However, I quickly noticed a big difference between the
              university and the marines: discipline. Many students were
              distracted in class, on their phones, chatting, and being late.
              Initially, I tried to ignore it, but as time went on, I found
              myself being influenced by the negative energy around me. After
              seven months, I left the university and focused on{" "}
              <strong>
                <i>programming</i>
              </strong>
              , which was what I enjoyed most during my time at the university.
            </li>
          </ul>
        </div>
      </div>
      <ul className="pagination">
        <li
          className={
            left === "5vw" ? "pagination-item active" : "pagination-item"
          }
          onClick={() => handlePage(1)}
        >
          1
        </li>
        <li
          className={
            left === "-85vw" ? "pagination-item active" : "pagination-item"
          }
          onClick={() => handlePage(2)}
        >
          2
        </li>
        <li
          className={
            left === "-175vw" ? "pagination-item active" : "pagination-item"
          }
          onClick={() => handlePage(3)}
        >
          3
        </li>
      </ul>
      <div className="footer-aboutlocation">
        <Footer />
      </div>
    </>
  );
}

export default About;
