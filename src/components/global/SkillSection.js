import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import SectionListItem from './SectionListItem';

export default class SkillSection extends Component {

    render() {
        const {title, icon, skills, fullSize} = this.props;
        console.log(skills);
        return (
          <div className="section">
              <SectionHeader title={title} icon={icon} fullSize={fullSize}/>
              {skills.map((item) =>
                <div key={skills[item]} className="row-progress">
                    <div key={skills[item]} className="col-10" />
                    <div key={skills[item]}>{item.label}</div>
                    <progress key={skills[item]} value={item.value} max="100" />
                </div>
              )}
          </div>
        );
    }
}

SkillSection.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    skills: PropTypes.object,
    fullSize: PropTypes.bool
};
