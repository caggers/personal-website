import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends Component {

    render() {
        const {title, icon, fullSize} = this.props;
        return (
          <div className="sectionTitleContainer">
              {fullSize &&
              <div className="row">
                  <div className="col-5">
                      <img src={icon} className="icon-img"/>
                  </div>
                  <div className="col-95">
                      <h1 className="sectionTitle">{title}</h1>
                  </div>
              </div>
              }
              {!fullSize &&
              <div className="row">
                  <div className="col-10">
                      <img src={icon} className="icon-img"/>
                  </div>
                  <div className="col-90">
                      <h1 className="sectionTitle">{title}</h1>
                  </div>
              </div>
              }
          </div>
        );
    }
}

HomePage.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    fullSize: PropTypes.bool
};
