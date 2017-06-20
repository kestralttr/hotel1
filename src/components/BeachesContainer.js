import {connect} from 'react-redux';
import Beaches from './Beaches';

const mapStateToProps = state => ({
  state:state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beaches);
