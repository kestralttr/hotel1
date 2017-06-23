import {connect} from 'react-redux';
import FoodDrink from './FoodDrink';

const mapStateToProps = state => ({
  state:state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodDrink);
