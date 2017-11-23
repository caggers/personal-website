import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import SectionListItem from './SectionListItem';

export default class Section extends Component {

    render() {
        const {title, icon, text, isListing} = this.props;
        console.log(text);
        if(!isListing) {
            return (
              <div className="section">
                  <SectionHeader title={title} icon={icon}/>
                  <div className="row">
                      <div className="col-5"/>
                      <div className="col-95">
                          <p>{text}</p>
                      </div>
                  </div>
              </div>
            );
        }
        return (
          <div className="section">
              <SectionHeader title={title} icon={icon}/>
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
    isListing: PropTypes.bool
};
