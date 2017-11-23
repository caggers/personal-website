import React from 'react';
// import Header from './global/Header';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/*<Header />*/}
        <Route exact path="/" component={HomePage}/>
      </div>
    );
  }

}
