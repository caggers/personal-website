import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import SectionListItem from './SectionListItem';

export default class Section extends Component {

    render() {
        const {title, icon, text, isListing, fullSize, blogs} = this.props;
        if(!isListing) {
            return (
              <div className="section">
                  <SectionHeader title={title} icon={icon} fullSize={fullSize}/>
                  <div className="row">
                      <div className="col-5"/>
                      <div className="col-95">
                          <p>{text}</p>
                          <p className="profile-links">
                              I am passionate about technology and reaching out to the next generation of women in Tech.
                              I’ve written some blogs about my experiences so far which you can read
                              <a href={blogs[0]}> here </a>,
                              <a href={blogs[1]}> here </a>, and
                              <a href={blogs[2]}> here </a>.
                          </p>
                      </div>
                  </div>
              </div>
            );
        }
        return (
          <div className="section">
              <SectionHeader title={title} icon={icon} fullSize={fullSize}/>
              <div className="row">
                  <div className="col-100">
                      {text.map((item) =>
                        <SectionListItem data={item} key={text[item]} />
                      )}
                  </div>
              </div>
          </div>
        );
    }
}

Section.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    isListing: PropTypes.bool,
    fullSize: PropTypes.bool,
    blogs: PropTypes.array
};
