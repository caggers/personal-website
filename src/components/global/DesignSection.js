import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import SectionListItem from './SectionListItem';

export default class DesignSection extends Component {

    render() {
        const {title, icon, skills, fullSize} = this.props;
        return (
          <div className="section">
              <SectionHeader title={title} icon={icon} fullSize={fullSize}/>
              <ul>
                  {skills.map((item) =>
                    <li key={item}>
                        {item}
                    </li>
                  )}
              </ul>
          </div>
        );
    }
}

DesignSection.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    skills: PropTypes.array,
    fullSize: PropTypes.bool
};
