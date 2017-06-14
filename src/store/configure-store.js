import RootReducer from '../reducers/rootReducer';
import {createStore} from 'redux';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default configureStore;
