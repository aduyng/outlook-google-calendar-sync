import { bindActionCreators } from 'redux';
import openMicrosoftLoginPopup from '../../actions/openMicrosoftLoginPopup';
import cancelLogin from '../../actions/cancelLogin';

export default dispatch => bindActionCreators({ openMicrosoftLoginPopup, cancelLogin }, dispatch);
