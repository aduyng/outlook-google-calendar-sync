import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import RequestMicrosoftGraphAPIAccessToken from './RequestMicrosoftGraphAPIAccessToken/index';

class App extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/requestMicrosoftAccessToken" component={RequestMicrosoftGraphAPIAccessToken} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    );
  }
}

export default connect(undefined, undefined)(App);
