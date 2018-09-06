import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class RequestMicrosoftGraphAPIAccessToken extends Component {
  static propTypes = {
    openMicrosoftLoginPopup: func.isRequired,
    code: string,
    status: string.isRequired,
    message: string,
    cancelLogin: func.isRequired
  };

  componentDidMount() {
    const { openMicrosoftLoginPopup } = this.props;
    return openMicrosoftLoginPopup();
  }

  onTryAgainClick = () => {
    const { openMicrosoftLoginPopup } = this.props;
    return openMicrosoftLoginPopup();
  }

  onCancelClick = () => {
    const { cancelLogin } = this.props;
    return cancelLogin();
  }

  render() {
    const { status, code, message } = this.props;

    if (status === 'error') {
      return (
        <Dialog
          open
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{code}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onTryAgainClick} color="primary" autoFocus>
              Try Again
            </Button>
            <Button onClick={this.onCancelClick} color="secondary" >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      );
    }

    return (
      <div>
        please wait...
      </div>
    );
  }
}
