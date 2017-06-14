import {connect} from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
