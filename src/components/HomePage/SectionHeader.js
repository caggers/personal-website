import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends Component {

    render() {
        const {title, icon} = this.props;
        return (
          <div className="sectionTitleContainer">
              <div className="row">
                  <div className="col-5">
                      <img src={icon} className="icon-img"/>
                  </div>
                  <div className="col-95">
                      <h1 className="sectionTitle">{title}</h1>
                  </div>
              </div>
          </div>
        );
    }
}

HomePage.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
};
