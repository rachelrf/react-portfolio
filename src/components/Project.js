import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Slider from 'react-slick';
import { hashHistory } from 'react-router';

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { projects, history } = this.props;

    let currentIndex = 0;
    let projectsJSX = projects.map((project, index) => {

      if (project.url === this.props.params.name) {
        currentIndex = index;
      }

      return (
        <div key={index} className="projectWrapper">
          <div className="project-container shaded">

            <div className="image-container" >
              <div className="screenshot-container" style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${project.desktop_image})`}}>
              </div>

              <Mobile image={project.mobile_image}/>

            </div>

            <div className="project-info">
              
               <div className="project-title"><a href={project.project_url}><h2>{project.title}</h2></a></div>
      
              <h4>Background</h4>
              <div className="project-info-text">{project.background}</div>
              <h4>Role</h4>
              <div className="project-info-text">{project.role}</div>
              <h4>Tech Stack</h4>
              <div className="project-info-text">{project.tech_stack}</div>

            </div>

            <div className="github-info">
              <div> <img src="../data/logos/github-logo.png"/> {project.github_url} </div>
            </div>

          </div>
        </div>
      );
    });

    const SimpleSlider = React.createClass({
      render: function () {
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: false,
          draggable: false,
          initialSlide: currentIndex,
          accessibility: true,
          afterChange: (newSlideIndex) => {
            window.location.hash = `/projects/${projects[newSlideIndex].url}`;
          }
        };

        return (
          <Slider {...settings}>
            {projectsJSX}
          </Slider>
        );
      }
    });
  return <SimpleSlider />;
  }


}

Project.propTypes = {
  projects: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps
)(Project);
