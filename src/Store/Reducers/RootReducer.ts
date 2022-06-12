import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Auth.Reducers';
import checkoutReducer from './Checkout.Reducers';
import headerReducer from './Header.Reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  checkout: checkoutReducer,
  header: headerReducer
});

export default rootReducer;
