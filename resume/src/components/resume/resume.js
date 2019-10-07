import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>North Carolina State University</h3>
                <p className="info">Bachelor in Computer Science <span>•</span> <em className="date">Dev 2019</em></p>
                <p>
                  During my time at North Carolina State University, I was an official student ambassador for the Department of Computer Science.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Fackebook</h3>
                <p className="info">Software Engineer<span>•</span> <em className="date">February 2019 - Present</em></p>
                <p>
                    Product Engineer working on the Messenger Ads products
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Blackbaud</h3>
                <p className="info">Software Engineer Intern<span>•</span> <em className="date">May 2018 - August 2018</em></p>
                <p>
                    Full stack engineer creating (Angular and .Net) applications for non-profit organizations
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Cisco</h3>
                <p className="info">Software Engineer Intern<span>•</span> <em className="date">May 2016 - August 2017</em></p>
                <p>
                   Full stack engineer creating MEAN apps to increase the productivity of engineers in the company
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
              <p>
                Not Limited To
              </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand objective-c" /><em>Objective-c</em></li>
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                <li><span className="bar-expand c" /><em>C</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}