import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openMicrosoftLoginPopup from '../actions/openMicrosoftLoginPopup';

const mapDispatchToProps = dispatch => bindActionCreators({ openMicrosoftLoginPopup }, dispatch);

class RequestMicrosoftGraphAPIAccessToken extends Component {
  static propTypes = {
    openMicrosoftLoginPopup: func.isRequired,
  };

  componentDidMount() {
    const { openMicrosoftLoginPopup } = this.props;
    return openMicrosoftLoginPopup();
  }

  render() {
    return (
      <div>
        please wait...
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(RequestMicrosoftGraphAPIAccessToken);
