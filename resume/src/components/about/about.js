import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
               Currently I work as a Product Engineer at Facebook on Messenger Ads Products, but that's enough about my day job. Some of the things that motivate me the most about Software Engineering are solving complex problems, bringing diversity to the software industry, and keeping up with a forever changing environment. In my personal life I enjoy working on my own personal coding projects, wathcing and playing the beutiful game of soccer, and staying on top of the sneaker game. I hope that this website can give those viewing a glance at my career as a software engineer.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Hakeem King</span><br />
                  <span>Sillicon Valley, CA</span><br />
                  <span>kingsqd1@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <Router>
                  <Link to="/resume.pdf" target="_blank" className="button" download><i className="fa fa-download" />Download Resume</Link>
                  </Router>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}