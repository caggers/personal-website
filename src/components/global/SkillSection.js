import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import SectionListItem from './SectionListItem';

export default class SkillSection extends Component {

    render() {
        const {title, icon, skills, fullSize} = this.props;
        return (
          <div className="section">
              <SectionHeader title={title} icon={icon} fullSize={fullSize}/>
              {skills.map((item) =>
                <div key={item.label} className="row-progress">
                    <div className="col-10" key="empty-div"/>
                    <div key="label">{item.label}</div>
                    <progress key="progress" value={item.value} max="100" />
                </div>
              )}
          </div>
        );
    }
}

SkillSection.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    skills: PropTypes.array,
    fullSize: PropTypes.bool
};
