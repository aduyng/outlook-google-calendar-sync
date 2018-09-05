import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as TodoActions from '../actions/todos';
import { Route, Switch } from 'react-router';
import style from './App.css';
import RequestMicrosoftGraphAPIAccessToken from './RequestMicrosoftGraphAPIAccessToken';

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { actions } = this.props;

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <Switch>
          <Route path="/requestMicrosoftAccessToken" component={RequestMicrosoftGraphAPIAccessToken} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    );
  }
}
