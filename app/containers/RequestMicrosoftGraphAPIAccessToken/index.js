import { connect } from 'react-redux';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import RequestMicrosoftGraphAPIAccessToken from './RequestMicrosoftGraphAPIAccessToken';

export default connect(mapStateToProps, mapDispatchToProps)(RequestMicrosoftGraphAPIAccessToken);
