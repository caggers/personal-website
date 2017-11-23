import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SectionListItem extends Component {

    render() {
        const {data} = this.props;
        return (
          <div>
              <ul>
                  <li>
                      <div className="list-item-heading">
                          {data.role}
                      </div>
                      {data.description &&
                      <div className="row">
                          <div className="col-30">
                              <div>{data.location}</div>
                              <div>{data.dates}</div>
                          </div>
                          <div className="col-70">
                              {data.description}
                          </div>
                      </div>
                      }
                      {!data.description &&
                      <div className="row">
                          <div className="col-100">
                              <div>{data.location}</div>
                              <div>{data.dates}</div>
                          </div>
                      </div>
                      }
                  </li>
              </ul>
          </div>
        );
    }
}

SectionListItem.propTypes = {
    data: PropTypes.object
};
