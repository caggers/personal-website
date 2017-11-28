import React, { Component } from 'react';
import './homepage.scss';
import profileImg from '../../images/profile-pic.png';
import { sectionsArray, skillsObject, designObject, otherObject } from "../../util/data";

import Section from '../global/Section';
import SkillSection from "../global/SkillSection";
import DesignSection from "../global/DesignSection";

export default class HomePage extends Component {

    returnHeader = () => {
        return (
          <div>
              My name is Gemma, I make things.< br/>
              I'm a Web Dev by day <br/>
              and a DIY electronics and wearables <br/>
              enthusiast by night.
          </div>
        );
    }

    render() {
        return (
          <div>
              <header className="header-text">
                  {this.returnHeader()}
              </header>
              <div className="row">
                  <div className="col-30">
                      <img src={profileImg} className="profile-img"/>
                  </div>
                  <div className="col-70">
                      {sectionsArray.map((item) =>
                        <Section
                          key={item.title}
                          icon={item.icon}
                          title={item.title}
                          text={item.text}
                          isListing={item.isListing}
                          fullSize={item.fullSize}
                          blogs={item.blogs}
                        />
                      )
                      }
                  </div>
              </div>
              <div className="row-skills">
                  <div className="col-30">
                      <SkillSection
                        title={skillsObject.title}
                        icon={skillsObject.icon}
                        skills={skillsObject.skills}
                        fullSize={skillsObject.fullSize}
                      />
                  </div>
                  <div className="col-30">
                      <DesignSection
                        title={designObject.title}
                        icon={designObject.icon}
                        skills={designObject.skills}
                        fullSize={designObject.fullSize}
                      />
                  </div>
                  <div className="col-30">
                      <DesignSection
                        title={otherObject.title}
                        icon={otherObject.icon}
                        skills={otherObject.skills}
                        fullSize={otherObject.fullSize}
                      />
                  </div>
              </div>
          </div>
        );
    }
}
