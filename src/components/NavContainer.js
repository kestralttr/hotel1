import {connect} from 'react-redux';
import Nav from './Nav';

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
