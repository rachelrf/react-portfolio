import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
          <nav className="navbar navbar-fixed-top navbar-inner header">

            <div className="container">
              <div className="navbar-brand pull-left">
                <Link to="/">Rachel RoseFigura</Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href="https://www.dropbox.com/home?preview=Rachel_RoseFigura.pdf" className="nav-link">
                    <span className="hide-when-small">Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <span className="hide-when-small">Contact</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rachelrf" className="nav-link">
                    <i className="fa fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rachelrosefigura" className="nav-link">
                    <i className="fa fa-linkedin-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href="https://angel.co/rachel-rosefigura" className="nav-link">
                    <i className="fa fa-angellist icon"></i>
                  </a>
                </li>
                </ul>
            </div>
            </nav>
    );
  }
}
