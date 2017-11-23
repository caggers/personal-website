import React, { Component } from 'react';
import './homepage.scss';
import profileImg from '../../images/profile-pic.png';
import { profile, experience, education } from "../../util/data";

import Section from './Section';

export default class HomePage extends Component {

  render() {
    return (
      <div>
        <header className="header-text">
            My name is Gemma, I make things.< br/>
            I'm a Web Dev by day <br />
            and a DIY electronics and wearables <br />
            enthusiast by night.
        </header>
          <div className="row">
              <div className="col-30-img">
                  <img src={profileImg} className="profile-img"/>
              </div>
              <div className="col-70">
                  <Section icon={profile.icon} title={profile.title} text={profile.text} isListing={false}/>
                  <Section icon={experience.icon} title={experience.title} text={experience.text} isListing={true} />
                  <Section icon={education.icon} title={education.title} text={education.text} isListing={true} />
              </div>
          </div>
      </div>
    );
  }
}
